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
    <div>GURPS stands for “Generic Universal RolePlaying System.” It was originally a joke . . . a code word to describe the game while we looked for a “real” name. Years went by – literally! – as the game developed. We never found a better name, and now that the Fourth Edition is in your hands, the name is more appropriate than ever. “Generic.” Some people like quick, fast-moving games, where the referee makes lots of decisions to keep things moving. Others want ultimate detail, with rules for every contingency. Most of us fall somewhere in between. GURPS starts with simple rules, and – especially in the combat system – builds up to as much optional detail as you like. But it’s still the same game. You may all use it differently, but your campaigns will all be compatible. “Universal.” I’ve always thought it was silly for game companies to publish one set of rules for fantasy, another one for Old West, another one for science fiction, and another one for super powers. GURPS is one set of rules that’s comprehensive enough to let you use any background. There are worldbooks and supplements that “fine-tune” the generic system for any game world you want. But they are still compatible. If you want to take your Wild West gunslinger and your WWII commando fortune hunting in Renaissance Italy . . . go for it! And because that’s exactly the kind of game that so many of our fans play, the Fourth Edition adds an overarching background created to support just such campaigns. “RolePlaying.” This is not just a hackand-slash game. The rules are written to make true roleplaying possible – and, in fact, to encourage it. GURPS is a game in which you take on the persona of another character – and pretend, for a little while, to be that character. “System.” It really is. Most other RPGs started out as a simple set of rules, and then were patched and modified, ad infinitum. That makes them hard to play. GURPS, more than ever in the Fourth Edition, is a unified whole. We’ve gone to a great deal of effort to make sure that it all works together, and it all works. GURPS will let you create any character you can imagine, and do anything you can think of . . . and it all makes sense. GURPS has been in print now for nearly 20 years. It was not designed in a vacuum; every game builds on the ones that came before. We learn from our successes – and from the successes of others. I think the best games are those that are simple, clear and easy to read, and I’ve tried hard to make GURPS “friendly.” One important influence was Hero Games’ Champions, for the flexibility of its character-creation system. Another was Flying Buffalo’s Tunnels & Trolls, for its appeal to solitaire gamers. Finally, M.A.R. Barker’s Empire of the Petal Throne remains noteworthy, even after decades of competition and imitation, for the detail and richness of its alien game world. But there’s more to GURPS than trying to repeat past success. The failures of earlier systems are important, too. In GURPS, I’ve tried to achieve several things I think earlier designs missed. First and foremost, of course, is the flexibility of a “universal” system. Others have tried this, but have fallen into the twin traps of watered-down combat (where a lightning bolt is just like a .45 pistol) or incompatibility (where players have to learn so many alternate rules for each new game and characters don’t easily cross over). GURPS presents a single, unified system that allows for great diversity without losing its coherence. This Fourth Edition incorporates dozens of rules that originally appeared in supplements published for the Third Edition. They seemed important enough to bring into the Basic Set – so here they are. Second is organization. Every gamer has had the experience of hunting frantically through one book after another, looking for a rule . . . and not finding it. GURPS is extensively cross-referenced, with a Table of Contents, an Index, and a Glossary of terms used in the game. Third is ease of play. In GURPS, most of the detailed calculations are done before you start play . . . they are entered on the character sheet, and saved until you need them. Once play actually begins, it should not be complex. I’ve tried to make GURPS as fastmoving yet realistic as possible. It’s up to you to decide whether I succeeded. Most roleplaying systems depend for their success on a continual flow of “official” supplements and adventures. GURPS is different. True, we’ve released a lot of material already, and we plan to do much more; a totally universal system offers great leeway, and we’ve got a supplement list as long as your arm. But GURPS is designed to be as compatible as possible with supplements written for different games. The reason? Simple. Suppose that you’re a GURPS player. You’re at the hobby shop, and you see a really interesting supplement package. But it’s by another publisher, for another game. No problem. The GURPS system breaks everything down into plain English and simple numbers. Distances are given in feet and miles, rather than arbitrary units; times are given in minutes and seconds. That’s what makes it generic. That also makes it easy to translate. If you see an interesting supplement for another game, go right ahead and get it. You can use it as a sourcebook for GURPS. Likewise, if your gaming group favors other systems . . . you can still use your GURPS adventures. As long as that other game uses units that you can translate into feet, minutes, and other plain-English terms, you can import your GURPS adventures. When GURPS was launched, we dreamed of its becoming the “standard” roleplaying system. The hobby has grown hugely since then! There will never be a single standard . . . but GURPS is one of the standards, and that’s fine. We have never tried to drive others out of the market, or even to force them to conform to us. Instead, we are conforming to them – by producing a system that will work with any clearly written adventure. At any rate, here it is. I’m satisfied that GURPS is the most realistic, flexible, and “universal” system ever developed. This Fourth Edition is the culmination of 18 years of continuous development and two years of concerted revision. I hope you like it. In closing, I want to acknowledge and thank the two revisors of this edition. Sean Punch, the GURPS line editor, and David Pulver spent two years collating feedback, experimenting with variant systems, and knitting a decade and a half of rules material into a coherent whole. It would not have happened without them.</div>
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
