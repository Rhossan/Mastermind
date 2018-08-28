import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const preloadedState = {
  guesses:
    {
      slots:[],
      pegs: []
    },
  answer:
    [Math.floor(Math.random() * 10),
     Math.floor(Math.random() * 10),
     Math.floor(Math.random() * 10),
     Math.floor(Math.random() * 10)],
  score: 1
}

const configureStore = () => {
  return createStore(rootReducer,preloadedState, applyMiddleware(thunk, logger))
};

export default configureStore;

//scoreBoard: { } add at end for high score
