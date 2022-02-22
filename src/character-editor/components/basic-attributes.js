const template = document.createElement('template');

template.innerHTML = `
<div>
<div>
Strength (ST)
</div>
    
</div>
`;

class BasicAttributes extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {}
}
window.customElements.define('basic-attributes', BasicAttributes);