const template = document.createElement('template');
template.innerHTML = `
<strong>Cost</strong>
<div class="cost"></div>
<br>
<strong>Description</strong>
<div class="description"></div>
<br>
<div><strong>Special Limitations</strong></div>
<ol class="special-limitations"></ol>
`;

const strengthDescription = {
  cost: `10 points per level`,
  description: `Strength measures physical power and bulk. It is crucial if you are a warrior in a primitive world, as high ST lets you dish out and absorb more damage in hand-to-hand combat. Any adventurer will find ST useful for lifting and throwing things, moving quickly with a load, etc. ST directly determines Basic Lift (p. 15), basic damage, and Hit Points, and affects your character’s Build.
Lifting capacity is proportional to the square of ST. Compared to the average human adult (ST 10 – 10x10 = 100), ST 14 is about twice as strong (14x14 = 196), ST 17 is roughly three times as strong (17x17 = 289), and ST 20 is four times as strong (20x20 = 400 = 4x100). Likewise, ST 7 is about half as strong (7x7 = 49), ST 6 is approximately 1/3 as strong (6x6 = 36), and ST 5 is only 1/4 as strong(5x5=25= 100/4).
Strength is more “open-ended” than other attributes; scores greater than 20 are common among beings such as large animals, fantasy monsters, and robots. Even a human could have a ST over 20 – record-setting weightlifters can be very strong!
Those with nonhuman physiologies may, with the GM’s permission, purchase their ST with one or both of the limitations below. You may not reduce a point cost by more than 80% through limitations; treat any total over -80% as -80%.`,
  specialLimitations: [
    `No Fine Manipulators: If you have either level of the disadvantage No Fine Manipulators, you may purchase ST more cheaply. -40%.`,
    `Size: Large creatures may purchase ST more cheaply. -10% x Size Modifier, to a maximum limitation of -80% (for Size Modifier +8 or higher).`,
  ],
};
const dexterityDescription = {
  cost: `20 points per level`,
  description: `Dexterity measures a combination of agility, coordination, and fine motor ability. It controls your basic ability at most athletic, fighting, and vehicle-operation skills, and at craft skills that call for a delicate touch. DX also helps determine Basic Speed (a measure of reaction time, p. 17) and Basic Move (how fast you run, p. 17). Those with nonhuman physiolo- gies may, with the GM’s permission, purchase their DX with the following limitation.`,
  specialLimitations: [
    `No Fine Manipulators: If you have either level of the disadvantage No Fine Manipulators (p. 145), you may purchase DX more cheaply. -40%.
  `,
  ],
};
const intelligenceDescription = {
  cost: `20 points per level`,
  description: `Intelligence broadly measures brainpower, including creativity, intu- ition, memory, perception, reason, sanity, and willpower. It rules your basic ability with all “mental” skills –
  sciences, social interaction, magic, etc. Any wizard, scientist, or gadgeteer needs a high IQ first of all. The sec- ondary characteristics of Will (p. 16) and Perception (p. 16) are based on IQ.`,
  specialLimitations: [],
};
const healthDescription = {
  cost: `10 points per level`,
  description: `Health measures energy and vitali- ty. It represents stamina, resistance (to poison, disease, radiation, etc.), and basic “grit.” A high HT is good for any- one – but it is vital for low-tech war- riors. HT determines Fatigue Points (p. 16), and helps determine Basic Speed (p. 17) and Basic Move (p. 17).`,
  specialLimitations: [],
};

class AttributeDescription extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  _state;
  set state(value) {
    this._state = value;
    this.updateParagraph(this._state);
  }

  costElement;
  descriptionElement;
  specialLimitationsElement;
  connectedCallback() {
    this.costElement = this.shadowRoot.querySelector('.cost');
    this.descriptionElement = this.shadowRoot.querySelector('.description');
    this.specialLimitationsElement = this.shadowRoot.querySelector(
      '.special-limitations'
    );
  }

  updateParagraph(state) {
    this.specialLimitationsElement.innerHTML = '';
    switch (state) {
      case 'STRENGTH':
        this.costElement.innerHTML = strengthDescription.cost;
        this.descriptionElement.innerHTML = strengthDescription.description;
        strengthDescription.specialLimitations.map((limitation) => {
          this.specialLimitationsElement.append(limitation);
        });

        break;
      case 'DEXTERITY':
        this.costElement.innerHTML = dexterityDescription.cost;
        this.descriptionElement.innerHTML = dexterityDescription.description;
        dexterityDescription.specialLimitations.map((limitation) => {
          this.specialLimitationsElement.append(limitation);
        });

        break;
      case 'INTELLIGENCE':
        this.costElement.innerHTML = intelligenceDescription.cost;
        this.descriptionElement.innerHTML = intelligenceDescription.description;
        intelligenceDescription.specialLimitations.map((limitation) => {
          this.specialLimitationsElement.append(limitation);
        });

        break;
      case 'HEALTH':
        this.costElement.innerHTML = healthDescription.cost;
        this.descriptionElement.innerHTML = healthDescription.description;
        healthDescription.specialLimitations.map((limitation) => {
          this.specialLimitationsElement.append(limitation);
        });

        break;
      default:
        this.costElement.innerHTML = '';
        this.descriptionElement.innerHTML = '';
        this.specialLimitationsElement.innerHTML = '';
        break;
    }
  }
}
window.customElements.define('attribute-description', AttributeDescription);
