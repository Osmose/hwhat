import React from 'react';

import Todo from 'hwhat/components/Todo';


export default function TodoList({todos, actions, onSelectTodo}) {
    let listItems = [];
    for (let id in todos) {
        listItems.push(
            <Todo
                key={id}
                id={id}
                actions={actions}
                onSelect={onSelectTodo}
                {...todos[id]}
            />
        );
    }

    return (
        <ul>
            {listItems}
        </ul>
    );
};
