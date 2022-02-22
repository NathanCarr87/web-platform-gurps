const template = document.createElement('template');
template.innerHTML = `
<style>
ul {
  background-color: #6A8262;
  display: flex;
  justify-content: space-evenly;
  color: #F8F7F6;
  list-style:none;
  height:3rem;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
}
li {
  align-self: center;
}

</style>

<ul>
  <li>
    <a>Home</a>
  </li>
  <li>
    <a>Character Editor</a>
  </li>
</ul>
`;

class PageNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}
window.customElements.define('page-navbar', PageNavbar);
