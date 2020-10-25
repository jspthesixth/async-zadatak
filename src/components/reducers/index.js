import active from './active';
import currentState from './currentState';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  active,
  currentState
});

export default rootReducer;