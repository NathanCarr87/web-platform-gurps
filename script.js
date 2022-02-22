const state = {
    home: 'HOME',
    characterEditor: 'CHARACTER_EDITOR',
};

let currentState;
const routerOutlet = document.querySelector('.router-outlet')

function init() {
    setState('HOME');
}

function setState(newState) {
    switch (newState) {
        case 'HOME':
            currentState = state.home;
            // routerOutlet.innerHTML = `<home-page></home-page>`
            routerOutlet.innerHTML = `<character-editor></character-editor>`
            break;
        case 'CHARACTER_EDITOR':
            currentState = state.characterEditor;
            break;
        default:
            currentState = state.home;
            break;
    }
}
init();