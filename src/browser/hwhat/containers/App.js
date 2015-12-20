import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo, removeTodo} from 'hwhat/actions/todos';
import AddTodo from 'hwhat/components/AddTodo';
import TodoList from 'hwhat/components/TodoList';


class App extends Component {
    render() {
        let {todos} = this.props;

        return (
            <div>
                <AddTodo onSubmitTodo={::this.onSubmitTodo} />
                <TodoList todos={todos} onClickTodoDelete={::this.onClickTodoDelete}/>
            </div>
        );
    }

    onSubmitTodo(summary) {
        this.props.dispatch(addTodo(summary));
    }

    onClickTodoDelete(id) {
        this.props.dispatch(removeTodo(id));
    }
}


export default connect((state) => state)(App);
