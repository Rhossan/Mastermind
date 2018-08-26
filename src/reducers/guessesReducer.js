import {RECEIVE_NEW_GUESS} from './actions/guessesActions';
import merge from 'lodash/merge';

const guessesReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_GUESS:
    newState = merge({}, state);
    newState.push(action.guess);
    return newState;
      break;
    default:
    return state;
  }
};

export default guessesReducer;
