import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {Provider} from 'react-redux';
import rootReducer from './components/reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
