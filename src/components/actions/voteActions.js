const addVote = id => {
  return {
    type: 'ADD_VOTE',
    payload: id
  };
}

const removeVote = id => {
  return {
    type: 'REMOVE_VOTE',
    payload: id
  };
}

const addTwo = id => {
  return {
    type: 'ADD_TWO_VOTES',
    payload: id
  };
}

const removeTwo = id => {
  return {
    type: 'REMOVE_TWO_VOTES',
    payload: id
  };
}

export default {
  addVote,
  removeVote,
  addTwo,
  removeTwo
}