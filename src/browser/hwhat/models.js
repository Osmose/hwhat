import Immutable from 'immutable';


export const Todo = Immutable.Record({
    summary: '',
    complete: false,
    notes: '',
});
