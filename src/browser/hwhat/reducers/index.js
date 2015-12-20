import {combineReducers} from 'redux';

import todos from 'hwhat/reducers/todos';


export const rootReducer = combineReducers({
    todos,
});
