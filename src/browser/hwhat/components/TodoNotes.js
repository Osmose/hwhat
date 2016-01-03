import React, {Component} from 'react';


export default class TodoNotes extends Component {
    render() {
        return (
            <textarea
                ref="textarea"
                onFocus={::this.handleFocus}
                onBlur={::this.handleBlur}
                defaultValue={this.props.notes}
            />
        );
    }

    handleFocus() {
        this.props.onFocus();
    }

    handleBlur() {
        let {id, actions} = this.props;
        actions.changeTodoNotes(id, this.refs.textarea.value);
        this.props.onBlur();
    }
}
