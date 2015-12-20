import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from 'hwhat/containers/App';
import {rootReducer} from 'hwhat/reducers';


export function start() {
    let store = createStore(rootReducer, {todos: {1: {summary: 'test'}, 2: {summary: 'test2'}}});
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector('#app')
    );
}
