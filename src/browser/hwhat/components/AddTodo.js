import React, {Component, PropTypes} from 'react';


export default class AddTodo extends Component {
    render() {
        let {onSubmitTodo} = this.props;

        return (
            <form onSubmit={::this.onSubmitForm}>
                <input type="text" name="summary" ref="summary"
                       placeholder="Add a todo..."
                />
            </form>
        );
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.props.onSubmitTodo(this.refs.summary.value);
        this.refs.summary.value = '';
    }
};
