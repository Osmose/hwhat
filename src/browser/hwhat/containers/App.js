import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo, changeTodoComplete, deleteTodo} from 'hwhat/actions/todos';
import AddTodo from 'hwhat/components/AddTodo';
import TodoList from 'hwhat/components/TodoList';


class App extends Component {
    render() {
        let {todos} = this.props;

        return (
            <div>
                <AddTodo onAddTodo={::this.handleAddTodo} />
                <TodoList
                    todos={todos}
                    onDeleteTodo={::this.handleDeleteTodo}
                    onChangeTodoComplete={::this.handleChangeTodoComplete}
                />
            </div>
        );
    }

    handleAddTodo(summary) {
        this.props.dispatch(addTodo(summary));
    }

    handleDeleteTodo(id) {
        this.props.dispatch(deleteTodo(id));
    }

    handleChangeTodoComplete(id, complete) {
        this.props.dispatch(changeTodoComplete(id, complete));
    }
}


export default connect((state) => state)(App);
