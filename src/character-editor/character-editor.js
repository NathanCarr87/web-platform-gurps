const template = document.createElement('template');
template.innerHTML = `
<style>
.card {
  padding:1rem;
}
</style>
<character-editor-navbar></character-editor-navbar>
<div>
<div class="card w-50 mx-auto mb-3">
<div class="total-available-points">Total Points Available: </div>
<basic-attributes></basic-attributes>
</div>
<div class="card w-50 mx-auto">
<attribute-description></attribute-description>
    
</div>
</div>
`;

class CharacterEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  totalAvailablePoints = 150;
  totalAvailablePointsElement;
  attributeDescriptionElement;
  connectedCallback() {
    this.totalAvailablePointsElement = this.shadowRoot.querySelector(
      '.total-available-points'
    );

    this.updateTotalAvailablePoints();
    this.attributeDescriptionElement = this.shadowRoot.querySelector(
      'attribute-description'
    );

    this.shadowRoot.addEventListener('POINTS_SPENT', (e) => {
      this.updateTotalAvailablePoints(e.detail.value);
      this.attributeDescriptionElement.state = e.detail.attribute;
    });
  }

  updateTotalAvailablePoints(value) {
    if (value !== undefined) {
      this.totalAvailablePoints = this.totalAvailablePoints - value;
      this.totalAvailablePointsElement.innerHTML = `Total Available Points: ${this.totalAvailablePoints}`;
    } else {
      this.totalAvailablePointsElement.innerHTML = `Total Available Points: ${this.totalAvailablePoints}`;
    }
  }
}
window.customElements.define('character-editor', CharacterEditor);
