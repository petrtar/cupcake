import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, combineReducers } from 'redux';

import booksReducer from './reducer/booksReducer.js';
import booksCatalogReducer from './reducer/booksCatalogReducer.js';

const reducers = combineReducers({
    booksReducer: booksReducer,
    booksCatalogReducer: booksCatalogReducer
});

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
