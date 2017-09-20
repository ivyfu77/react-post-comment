import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [thunk, logger];

const middleware = composeEnhancers(applyMiddleware(...middlewares));
const store =  createStore(
  rootReducer,
  middleware
);

ReactDOM.render(
  <Provider store={ store }>
    <App test="ivy" />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
