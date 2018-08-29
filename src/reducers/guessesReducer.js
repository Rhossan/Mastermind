import {RECEIVE_NEW_GUESS} from '../actions/guessesActions';
import {RECEIVE_NEW_ANSWER} from '../actions/answerActions';
import merge from 'lodash/merge';

const guessesReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_GUESS:
      newState = merge({}, state);
      newState.slots.push(action.guess.slot);
      newState.pegs.push(action.guess.peg);
      return newState;
    case RECEIVE_NEW_ANSWER:
      newState = {
        slots:[],
        pegs: []
      }
      return newState;
    default:
    return state;
  }
};

export default guessesReducer;
