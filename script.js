const state = {
  home: 'HOME',
  characterEditor: 'CHARACTER_EDITOR',
};

let currentState;

function init() {
  setState('HOME');
}

function setState(newState) {
  switch (newState) {
    case 'HOME':
      currentState = state.home;
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
