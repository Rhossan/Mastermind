import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore  from './store/store';
import { HashRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';


const store = configureStore();
window.dispatch = store.dispatch;
window.getState = store.getState;

ReactDOM.render(
  <Provider store = {store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
