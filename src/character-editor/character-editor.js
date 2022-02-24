const template = document.createElement('template');
template.innerHTML = `
<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content:start;
  align-items: center;
  height: 100%;
  width: 100%;
}
.card {
  padding:1rem;
  margin: 1rem 0;
  border-radius: 5px;
  width: 65%;
  box-shadow: 5px 5px 8px #888888;
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 2s linear;
}
.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 1s, opacity 1s linear;
}
</style>
<character-editor-navbar></character-editor-navbar>
<character-meta></character-meta>
<div class="wrapper">
  <div class="card top-card">
    <basic-attributes></basic-attributes>
  </div>
  <div class="card bottom-card hidden">
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

  attributeDescriptionElement;
  topCard;
  bottomCard;
  characterMetaElement;
  connectedCallback() {
    this.characterMetaElement = this.shadowRoot.querySelector('character-meta');

    this.attributeDescriptionElement = this.shadowRoot.querySelector(
      'attribute-description'
    );

    this.topCard = this.shadowRoot.querySelector('.top-card');
    this.bottomCard = this.shadowRoot.querySelector('.bottom-card');

    this.shadowRoot.addEventListener('POINTS_SPENT', (e) => {
      // Updates the total unspent points
      this.characterMetaElement.unspentPoints = e.detail.value;

      // updates the cost/description/special limitations
      this.attributeDescriptionElement.state = e.detail.attribute;

      if (e.detail.displayDetails) {
        this.bottomCard.classList.remove('hidden');
        this.bottomCard.classList.add('visible');
      } else {
        this.bottomCard.classList.remove('visible');
        this.bottomCard.classList.add('hidden');
      }
    });
  }
}
window.customElements.define('character-editor', CharacterEditor);
