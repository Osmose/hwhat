import {ADD_TODO, CHANGE_TODO_COMPLETE, DELETE_TODO} from 'hwhat/actions/todos';


function newID(state) {
    return Math.max(...Object.keys(state)) + 1;
}


export default function todos(state={}, action) {
    let newState = null;
    let todo = null;

    switch (action.type) {
        case ADD_TODO:
            newState = {...state};
            newState[newID(newState)] = {summary: action.summary, complete: false};
            return newState;

        case DELETE_TODO:
            newState = {...state};
            delete newState[action.id];
            return newState;

        case CHANGE_TODO_COMPLETE:
            newState = {...state};

            todo = {...state[action.id]};
            todo.complete = action.complete;
            newState[action.id] = todo;

            return newState;

        default:
            return state;
    }
}
