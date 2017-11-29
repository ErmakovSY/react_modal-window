export default (state = {show: true}, action) => {
  switch (action.type) {
    // Check if action dispatched is
    // TOGGLE_MODAL_WINDOW and act on that
    case 'TOGGLE_MODAL_WINDOW':
      return Object.assign({}, state, action.show)
    default:
      return state;
  }
};