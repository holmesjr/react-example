import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { PersistGate } from 'redux-persist/integration/react'
import { theApp } from './reducer'

import watchForShowSaga from './saga';

const persistConfig = {
    key: 'root',
    storage,
};

// wrap persistence around the reducer
const persistedReducer = persistReducer(persistConfig, theApp);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

//start running the watcher right away
sagaMiddleware.run(watchForShowSaga);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
