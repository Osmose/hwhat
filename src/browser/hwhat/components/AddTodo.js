import React, {Component, PropTypes} from 'react';


export default class AddTodo extends Component {
    render() {
        return (
            <form onSubmit={::this.handleSubmit}>
                <input
                    type="text"
                    name="summary"
                    ref="summary"
                    placeholder="Add a todo..."
                />
            </form>
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onAddTodo(this.refs.summary.value);
        this.refs.summary.value = '';
    }
};
