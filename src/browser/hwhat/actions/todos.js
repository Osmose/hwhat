// Action Types
export const ADD_TODO = 'add_todo';
export const DELETE_TODO = 'delete_todo';
export const CHANGE_TODO_COMPLETE = 'change_todo_complete';
export const CHANGE_TODO_SUMMARY = 'change_todo_summary';


// Action Creators
export const addTodo = (summary) => ({
    type: ADD_TODO,
    summary: summary,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id: id,
});

export const changeTodoComplete = (id, complete) => ({
    type: CHANGE_TODO_COMPLETE,
    id: id,
    complete: complete,
});

export const changeTodoSummary = (id, summary) => ({
    type: CHANGE_TODO_SUMMARY,
    id: id,
    summary: summary,
});
