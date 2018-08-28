import {RECEIVE_NEW_ANSWER} from '../actions/answerActions';
import merge from 'lodash/merge';

const answerReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_ANSWER:
      newState =
      [Math.floor(Math.random() * 10),
       Math.floor(Math.random() * 10),
       Math.floor(Math.random() * 10),
       Math.floor(Math.random() * 10)];
      return newState;
    default:
      return state;
  }
}

export default answerReducer;
