import { combineReducers } from 'redux';
import scoreReducer from './scoreReducer';
import guessesReducer from './guessesReducer';
// import scoreBoardReducer from './scoreBoardReducer';

const rootReducer = combineReducers({
  guesses: guessesReducer,
  score: scoreReducer,
});

export default rootReducer;

  //scoreBoard: scoreBoardReducer
