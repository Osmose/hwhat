import {compose, createStore} from 'redux';

import DevTools from 'hwhat/containers/DevTools';
import {rootReducer} from 'hwhat/reducers';
import {isReleaseBuild} from 'hwhat/utils';


let configureStore = null;
if (isReleaseBuild()) {
    configureStore = function(initialState) {
        return createStore(rootReducer, initialState);
    }
} else {
    let createStoreDev = compose(DevTools.instrument())(createStore);

    configureStore = function(initialState) {
        return createStoreDev(rootReducer, initialState);
    }
}


export default configureStore;
