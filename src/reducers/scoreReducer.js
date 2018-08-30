
import {RECEIVE_NEW_ANSWER} from '../actions/answerActions';
import {RECEIVE_NEW_GUESS} from '../actions/guessesActions';
const scoreReducer = (state = 0, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_GUESS:
      return state + 1;
    case RECEIVE_NEW_ANSWER:
      state = 0;
      return state;
    default:
    return state;
  }
};

export default scoreReducer;
