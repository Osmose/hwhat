import React, {Component, PropTypes} from 'react';

import TodoSummaryEditor from 'hwhat/components/TodoSummaryEditor';


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
            <li>
                <input
                    type="checkbox"
                    ref="complete"
                    checked={complete}
                    onChange={::this.handleChangeComplete}
                />
                {this.renderSummary(id, summary)}
                <button onClick={::this.handleClickDelete}>
                    Delete
                </button>
            </li>
        );
    }

    renderSummary(id, summary) {
        if (this.state.editing) {
            return (
                <TodoSummaryEditor summary={summary} onSave={::this.handleSave} />
            );
        } else {
            return (
                <span onDoubleClick={::this.handleDoubleClickSummary}>
                    {summary}
                </span>
            );
        }
    }

    handleDoubleClickSummary() {
        this.setState({editing: true});
    }

    handleClickDelete() {
        this.props.actions.deleteTodo(this.props.id);
    }

    handleChangeComplete() {
        this.props.actions.changeTodoComplete(this.props.id, this.refs.complete.checked);
    }

    handleSave(summary) {
        this.props.actions.changeTodoSummary(this.props.id, summary);
        this.setState({editing: false});
    }
};
