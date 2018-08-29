
import {RECEIVE_NEW_ANSWER} from '../actions/answerActions';
import {RECEIVE_NEW_GUESS} from '../actions/guessesActions';
import merge from 'lodash/merge';

const scoreReducer = (state = 0, action) => {

  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_GUESS:
      // newState = merge({}, state);
      // state+=1;
      return state + 1;
    case RECEIVE_NEW_ANSWER:
      state = 0;
      return state;
    default:
    return state;
  }
};

export default scoreReducer;
