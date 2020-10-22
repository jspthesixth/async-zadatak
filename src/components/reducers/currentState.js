const initialState = {
  items: [],
  loading: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_DATA_START':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: []
      };
    case 'CLEAR_DATA':
      return {
        initialState
      };
    case 'ADD_VOTE':
      return {
        ...state,
        items: state.items.map(item => 
            item.id  === action.payload ? { ...item, votes: item.votes + 1 } : item
        ) 
    };
    case 'REMOVE_VOTE':
      return {
        ...state,
        items: state.items.map(item => 
            item.id === action.payload ? { ...item, votes: item.votes - 1 } : item
        ) 
    };
    case 'ADD_TWO_VOTES':
      return {
        ...state,
        items: state.items.map(item => 
            item.id === action.payload ? { ...item, votes: item.votes + 2 } : item
        ) 
    };
    case 'REMOVE_TWO_VOTES':
      return {
        ...state,
        items: state.items.map(item => 
            item.id === action.payload ? { ...item, votes: item.votes - 2 } : item
        ) 
    };
    default:
      return state;
  }
}

export default dataReducer;