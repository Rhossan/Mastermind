import { combineReducers } from 'redux';
import scoreReducer from './scoreReducer';
import guessesReducer from './guessesReducer';
import answerReducer from './answerReducer';
// import scoreBoardReducer from './scoreBoardReducer';

const rootReducer = combineReducers({
  guesses: guessesReducer,
  score: scoreReducer,
  answer: answerReducer
});

export default rootReducer;

  //scoreBoard: scoreBoardReducer
