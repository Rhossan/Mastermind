import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const determineAnswer = () => {
  let arr = [];
  while (arr.length < 4){
    let rand = Math.floor(Math.random() * 10);
    if (arr.indexOf(rand) === -1){
      arr.push(rand);
    }
  }
  return arr;
}

const preloadedState = {
  guesses:
    {
      slots:[],
      pegs: []
    },
  answer: determineAnswer(),
  score: 1
}

const configureStore = () => {
  return createStore(rootReducer,preloadedState, applyMiddleware(thunk, logger))
};

export default configureStore;

//scoreBoard: { } add at end for high score
