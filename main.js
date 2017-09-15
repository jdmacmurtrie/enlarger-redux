import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import form from './reducers/form'
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore(form)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
