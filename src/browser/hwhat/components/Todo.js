import React, {Component, PropTypes} from 'react';


export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };
    }

    render() {
        let {id, summary, complete} = this.props;

        return (
            <li onClick={::this.handleClick}>
                <input
                    type="checkbox"
                    ref="complete"
                    checked={complete}
                    onChange={::this.handleChangeComplete}
                />
                <span>{summary}</span>
                <button onClick={::this.handleClickDelete}>
                    Delete
                </button>
            </li>
        );
    }

    handleClick() {
        this.props.onSelect(this.props.id);
    }

    handleClickDelete() {
        this.props.actions.deleteTodo(this.props.id);
    }

    handleChangeComplete() {
        this.props.actions.changeTodoComplete(this.props.id, this.refs.complete.checked);
    }
};
