import React from 'react';

import Todo from 'hwhat/components/Todo';


export default function TodoList({todos, actions}) {
    let listItems = [];
    for (let id in todos) {
        listItems.push(
            <Todo
                key={id}
                id={id}
                actions={actions}
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
