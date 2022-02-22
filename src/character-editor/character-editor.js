const template = document.createElement('template');
template.innerHTML = `
<style>
.container {
  padding: 1rem;
  margin: auto;
  border-radius: 15px;
  background-color: #f5f5f5;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
<div class="container">
    
</div>
`;

class HomePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}
window.customElements.define('home-page', HomePage);
