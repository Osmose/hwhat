import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from 'hwhat/containers/App';
import DevTools from 'hwhat/containers/DevTools';
import {Todo} from 'hwhat/models';
import {rootReducer} from 'hwhat/reducers';
import configureStore from 'hwhat/store';
import {isReleaseBuild} from 'hwhat/utils';


export function start() {
    let initialState = Immutable.fromJS({todos: {
        1: new Todo({summary: 'test'}),
        2: new Todo({summary: 'test2', complete: true}),
    }});

    let store = configureStore(initialState);
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
