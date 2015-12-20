import {ADD_TODO, REMOVE_TODO} from 'hwhat/actions/todos';


function newID(state) {
    return Math.max(...Object.keys(state)) + 1;
}


export default function todos(state={}, action) {
    switch (action.type) {
        case ADD_TODO:
            state = {...state};
            state[newID(state)] = {summary: action.summary};
            return state;

        case REMOVE_TODO:
            state = {...state};
            delete state[action.id];
            return state;

        default:
            return state;
    }
}
