const template = document.createElement('template');

template.innerHTML = `
<style>
input, .spent-points {
    width: 5rem;
    height: 5rem;
    border-radius: 10px;
    font-size: 2rem;
    text-align: center;
}
.spent-points {
    border-left:1px solid black;
    border-right:1px solid black;
}

</style>

<div class="row">
<div class="col-3">Strength (ST)</div>
<div class="col-3">Dexterity (DX)</div>
<div class="col-3">Intelligence (IQ)</div>
<div class="col-3">Health (HT)</div>
<div class="col-3">
  <input class="strength" type="number" value="10" />
</div>
<div class="col-3">
  <input class="dexterity" type="number" value="10" />
</div>
<div class="col-3">
  <input class="intelligence" type="number" value="10" />
</div>
<div class="col-3">
  <input class="health" type="number" value="10" />
</div>
<div class="col-12">Points Spent</div>
<div class="col-3">
  <div class="strength-spent-points spent-points">0</div>
</div>
<div class="col-3">
  <div class="dexterity-spent-points spent-points">0</div>
</div>
<div class="col-3">
  <div class="intelligence-spent-points spent-points">0</div>
</div>
<div class="col-3">
  <div class="health-spent-points spent-points">0</div>
</div>
</div>
`;

class BasicAttributes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  strengthScoreInput;
  strengthSpentPointsElement;
  dexterityScoreInput;
  dexteritySpentPointsElement;
  intelligenceScoreInput;
  intelligenceSpentPointsElement;
  healthScoreInput;
  healthSpentPointsElement;
  pointsSpentEvent;

  connectedCallback() {
    this.strengthScoreInput = this.shadowRoot.querySelector('.strength');
    this.strengthSpentPointsElement = this.shadowRoot.querySelector(
      '.strength-spent-points'
    );
    this.strengthScoreInput.addEventListener('input', () => {
      this.calculateStrengthPointsSpent();
    });
    this.strengthScoreInput.addEventListener('focus', () => {
      this.dispatchEvent(0, 'STRENGTH');
    });
    this.strengthScoreInput.addEventListener('blur', () => {
      this.dispatchEvent(0, '');
    });

    this.dexterityScoreInput = this.shadowRoot.querySelector('.dexterity');
    this.dexteritySpentPointsElement = this.shadowRoot.querySelector(
      '.dexterity-spent-points'
    );
    this.dexterityScoreInput.addEventListener('input', () => {
      this.calculateDexterityPointsSpent();
    });
    this.dexterityScoreInput.addEventListener('focus', () => {
      this.dispatchEvent(0, 'DEXTERITY');
    });
    this.dexterityScoreInput.addEventListener('blur', () => {
      this.dispatchEvent(0, '');
    });

    this.intelligenceScoreInput =
      this.shadowRoot.querySelector('.intelligence');
    this.intelligenceSpentPointsElement = this.shadowRoot.querySelector(
      '.intelligence-spent-points'
    );
    this.intelligenceScoreInput.addEventListener('input', () => {
      this.calculateIntelligencePointsSpent();
    });
    this.intelligenceScoreInput.addEventListener('focus', () => {
      this.dispatchEvent(0, 'INTELLIGENCE');
    });
    this.intelligenceScoreInput.addEventListener('blur', () => {
      this.dispatchEvent(0, '');
    });

    this.healthScoreInput = this.shadowRoot.querySelector('.health');
    this.healthSpentPointsElement = this.shadowRoot.querySelector(
      '.health-spent-points'
    );
    this.healthScoreInput.addEventListener('input', () => {
      this.calculateHealthPointsSpent();
    });
    this.healthScoreInput.addEventListener('focus', () => {
      this.dispatchEvent(0, 'HEALTH');
    });
    this.healthScoreInput.addEventListener('blur', () => {
      this.dispatchEvent(0, '');
    });
  }

  calculateStrengthPointsSpent() {
    let score = this.strengthSpentPointsElement.innerHTML;
    this.strengthSpentPointsElement.innerHTML =
      (this.strengthScoreInput.value - 10) * 10;
    this.dispatchEvent(
      score - this.strengthSpentPointsElement.innerHTML,
      'STRENGTH'
    );
  }
  calculateHealthPointsSpent() {
    let score = this.healthSpentPointsElement.innerHTML;
    this.healthSpentPointsElement.innerHTML =
      (this.healthScoreInput.value - 10) * 10;
    this.dispatchEvent(score - this.healthSpentPointsElement.innerHTML);
  }
  calculateDexterityPointsSpent() {
    let score = this.dexteritySpentPointsElement.innerHTML;
    this.dexteritySpentPointsElement.innerHTML =
      (this.dexterityScoreInput.value - 10) * 20;
    this.dispatchEvent(score - this.dexteritySpentPointsElement.innerHTML);
  }
  calculateIntelligencePointsSpent() {
    let score = this.intelligenceSpentPointsElement.innerHTML;
    this.intelligenceSpentPointsElement.innerHTML =
      (this.intelligenceScoreInput.value - 10) * 20;
    this.dispatchEvent(score - this.intelligenceSpentPointsElement.innerHTML);
  }

  dispatchEvent(value, attribute) {
    this.shadowRoot.dispatchEvent(
      new CustomEvent('POINTS_SPENT', {
        detail: {
          value,
          attribute,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
window.customElements.define('basic-attributes', BasicAttributes);
