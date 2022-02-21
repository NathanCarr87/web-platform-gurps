console.log('hello!');
const state = {
  home: 'HOME',
};

let currentState;

function init() {
  setState('HOME');
}

function setState(newState) {
  switch (newState) {
    case 'HOME':
      currentState = state.home;
    default:
      currentState = state.home;
  }
}
init();
