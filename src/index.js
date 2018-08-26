import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore  from './store/store';

const store = configureStore();
window.dispatch = store.dispatch;
window.getState = store.getState;

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
