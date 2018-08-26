
import {RECEIVE_NEW_SCORE} from './actions/scoreReducer';
import merge from 'lodash/merge';

const guessesReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    default:
    return state;
  }
};

export default guessesReducer;
