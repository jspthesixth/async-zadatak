const active = (state = '', action) => {
  switch(action.type) {
    case 'SET_ADDING':
      return state = 'ADDING';
    case 'SET_REMOVING':
      return state = 'REMOVING';
    default:
      return state;
  }
}

export default active;