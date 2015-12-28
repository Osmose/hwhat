import Immutable from 'immutable';
import { combineReducers } from 'redux-immutablejs';

import todos from 'hwhat/reducers/todos';


export const rootReducer = combineReducers({
    todos,
});
