import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from 'hwhat/containers/App';
import DevTools from 'hwhat/containers/DevTools';
import {rootReducer} from 'hwhat/reducers';
import configureStore from 'hwhat/store';
import {isReleaseBuild} from 'hwhat/utils';


export let store = null;


export function start() {
    let initialState = Immutable.fromJS({todos: {
        1: {summary: 'test', complete: false},
        2: {summary: 'test2', complete: true},
    }});

    store = configureStore(initialState);
    ReactDOM.render(
        <Provider store={store}>
            <div>
                <App />
                {!isReleaseBuild() ? <DevTools /> : null}
            </div>
        </Provider>,
        document.querySelector('#app')
    );
}
