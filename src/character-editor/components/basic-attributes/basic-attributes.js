const template = document.createElement('template');

template.innerHTML = `
<style>
.wrapper {
  display: flex;
  justify-content: space-around;
}
.container {
  display: flex;
  flex-direction: column;
}
.container > *{
  margin: .25rem 0;
  text-align:center;
}
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
    display: flex;
    justify-content: center;
    align-items: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
<div class="wrapper">
<div class="container">
  <div>Strength (ST)</div>
    <input class="strength" type="number" value="10" />
    <div class="strength-spent-points spent-points">0</div>
</div>

<div class="container">
  <div>Dexterity (DX)</div>
    <input class="dexterity" type="number" value="10" />

    <div class="dexterity-spent-points spent-points">0</div>
</div>

<div class="container">
  <div>Intelligence (IQ)</div>


    <input class="intelligence" type="number" value="10" />

    <div class="intelligence-spent-points spent-points">0</div>
</div>

<div class="container">
  <div>Health (HT)</div>


    <input class="health" type="number" value="10" />



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
      this.dispatchEvent(0, 'STRENGTH', true, true);
    });
    this.strengthScoreInput.addEventListener('blur', () => {
      this.dispatchEvent(0, '', false, false);
    });

    this.dexterityScoreInput = this.shadowRoot.querySelector('.dexterity');
    this.dexteritySpentPointsElement = this.shadowRoot.querySelector(
      '.dexterity-spent-points'
    );
    this.dexterityScoreInput.addEventListener('input', () => {
      this.calculateDexterityPointsSpent();
    });
    this.dexterityScoreInput.addEventListener('focus', () => {
      this.dispatchEvent(0, 'DEXTERITY', true, true);
    });
    this.dexterityScoreInput.addEventListener('blur', () => {
      this.dispatchEvent(0, '', false, false);
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
      this.dispatchEvent(0, 'INTELLIGENCE', true, false);
    });
    this.intelligenceScoreInput.addEventListener('blur', () => {
      this.dispatchEvent(0, '', false, false);
    });

    this.healthScoreInput = this.shadowRoot.querySelector('.health');
    this.healthSpentPointsElement = this.shadowRoot.querySelector(
      '.health-spent-points'
    );
    this.healthScoreInput.addEventListener('input', () => {
      this.calculateHealthPointsSpent();
    });
    this.healthScoreInput.addEventListener('focus', () => {
      this.dispatchEvent(0, 'HEALTH', true, false);
    });
    this.healthScoreInput.addEventListener('blur', () => {
      this.dispatchEvent(0, '', false, false);
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

  dispatchEvent(value, attribute, displayDetails, displaySpecialLimitations) {
    this.shadowRoot.dispatchEvent(
      new CustomEvent('POINTS_SPENT', {
        detail: {
          value,
          attribute,
          displayDetails,
          displaySpecialLimitations,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
window.customElements.define('basic-attributes', BasicAttributes);
