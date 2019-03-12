import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

const initialState = {
    shown: localStorage.getItem("shown")
};

//the reducer
const theApp = (state = initialState, action) => {

    switch (action.type) {
        case 'SHOW':
            return Object.assign({}, state, {
                shown: true
            });
        default:
            return state;
    }
};

function* theSaga() {
    console.log('Hello Sagas!')
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(theApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(theSaga);

const action = type => store.dispatch({type}); // TODO: Figure this out

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
