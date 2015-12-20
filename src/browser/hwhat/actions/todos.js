// Action Types
export const ADD_TODO = 'add_todo';
export const REMOVE_TODO = 'remove_todo';


// Action Creators
export const addTodo = (summary) => ({
    type: ADD_TODO,
    summary: summary,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id,
});
