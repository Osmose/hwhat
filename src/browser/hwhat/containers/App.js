import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todoActions from 'hwhat/actions/todos';
import AddTodo from 'hwhat/components/AddTodo';
import TodoList from 'hwhat/components/TodoList';


let App = ({todos, actions}) => (
    <div>
        <AddTodo actions={actions} />
        <TodoList todos={todos} actions={actions} />
    </div>
);

// Convert immutable state to normal JS for React.
function mapStateToProps(state) {
    return state.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
