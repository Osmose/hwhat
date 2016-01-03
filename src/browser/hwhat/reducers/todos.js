import Immutable from 'immutable';

import * as actions from 'hwhat/actions/todos';
import {Todo} from 'hwhat/models';


function newID(todos) {
    return Math.max(...todos.keys()) + 1;
}


export default function todoReducer(todos={}, action) {
    let todo = null;

    switch (action.type) {
        case actions.ADD_TODO:
            todo = new Todo({
                summary: action.summary,
            });
            return todos.set(newID(todos), todo);

        case actions.DELETE_TODO:
            return todos.delete(action.id);

        case actions.CHANGE_TODO_COMPLETE:
            todo = todos.get(action.id).set('complete', action.complete);
            return todos.set(action.id, todo);

        case actions.CHANGE_TODO_SUMMARY:
            todo = todos.get(action.id).set('summary', action.summary);
            return todos.set(action.id, todo);

        case actions.CHANGE_TODO_NOTES:
            todo = todos.get(action.id).set('notes', action.notes);
            return todos.set(action.id, todo);

        default:
            return todos;
    }
}
