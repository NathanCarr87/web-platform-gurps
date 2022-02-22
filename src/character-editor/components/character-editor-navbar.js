const template = document.createElement('template');
template.innerHTML = `
<style>
ul {
  background-color: #9780A0;
  display: flex;
  justify-content: space-evenly;
  color: #F8F7F6;
  list-style:none;
  height:3rem;
  font-size: 1.25rem;
  margin:0;
}
li {
  align-self: center;
}
</style>
<ul>
  <li>
    <div>Characteristics</div>
  </li>
  <li>
    <div>Advantages</div>
  </li>
  <li>
    <div>Disadvantages</div>
  </li>
  <li>
    <div>Skills</div>
  </li>
  <li>
    <div>Magic</div>
  </li>
  <li>
    <div>Psionics</div>
  </li>
  <li>
    <a>Home</a>
  </li>

</ul>
`;

class CharacterEditorNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}
window.customElements.define('character-editor-navbar', CharacterEditorNavbar);
