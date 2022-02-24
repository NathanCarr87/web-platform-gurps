const template = document.createElement('template');
template.innerHTML = `
<style>
ul {
  display: flex;
  justify-content: space-evenly;
  list-style:none;
  height:3rem;
  margin:0;
}
li {
  align-self: center;
}

li {
  display: flex;
  width: 100%;
  margin: 0 1rem;
}
li > div {
  margin-right: .5rem;
}
</style>
<ul>
  <li>
    <div>Name</div>
    <input class="name" type="text"/>
  </li>
  <li>
    <div>Point Total</div>
    <div class="point-total"></div>
  </li>
  <li>
    <div>Unspent Points</div>
    <div class="unspent-points">150</div>
  </li>
  <li>
    <div>Disadvantage Limit</div>
    <div class="disadvantage-limit">75</div>
  </li>
</ul>
`;

class CharacterMeta extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  _unspentPoints;
  totalAvailablePoints = 150;

  set unspentPoints(value) {
    this._unspentPoints = value;
    this.updateTotalAvailablePoints(value);
  }

  set disadvantageLimit(value) {}

  unspentPointsElement;
  disadvantageLimitElement;
  connectedCallback() {
    this.unspentPointsElement =
      this.shadowRoot.querySelector('.unspent-points');
    this.disadvantageLimitElement = this.shadowRoot.querySelector(
      '.disadvantage-limit'
    );
  }

  updateTotalAvailablePoints(value) {
    if (value !== undefined) {
      this.totalAvailablePoints = this.totalAvailablePoints + value;
      this.unspentPointsElement.innerHTML = `${this.totalAvailablePoints}`;
    } else {
      this.unspentPointsElement.innerHTML = `${this.totalAvailablePoints}`;
    }
  }
}
window.customElements.define('character-meta', CharacterMeta);
