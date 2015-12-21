import React, {Component, PropTypes} from 'react';

import Todo from 'hwhat/components/Todo';


export default class TodoList extends Component {
    /*propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            summary: PropTypes.string.isRequired,
        }).isRequired).isRequired,
    }*/

    render() {
        let {todos, onDeleteTodo, onChangeTodoComplete} = this.props;

        let listItems = [];
        for (let id in todos) {
            listItems.push(
                <Todo
                    key={id}
                    id={id}
                    {...todos[id]}
                    onDelete={onDeleteTodo}
                    onChangeComplete={onChangeTodoComplete}
                />
            );
        }

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
};
