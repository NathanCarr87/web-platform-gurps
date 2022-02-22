const template = document.createElement('template');
template.innerHTML = `
<style>

</style>
<div>
<basic-attributes></basic-attributes>
    
</div>
`;

class CharacterEditor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {}
}
window.customElements.define('character-editor', CharacterEditor);