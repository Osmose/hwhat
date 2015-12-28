import React, {Component} from 'react';

import {store} from 'hwhat';


export default class TodoSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };
    }

    render() {
        let {summary} = this.props;

        if (!this.state.editing) {
            return (
                <p onClick={::this.handleClick}>
                    {summary}
                </p>
            );
        } else {
            return (
                <form onSubmit={::this.handleSave}>
                    <input type="text"
                           name="summary"
                           ref="summary"
                           defaultValue={summary}
                           onBlur={::this.handleSave}
                    />
                </form>
            );
        }
    }

    componentDidUpdate() {
        if (this.state.editing) {
            let summary = this.refs.summary;
            summary.focus();

            let last = summary.value.length;
            summary.setSelectionRange(last, last);
        }
    }

    handleClick() {
        this.setState({editing: true});
    }

    handleSave(event) {
        event.preventDefault();
        this.props.actions.changeTodoSummary(this.props.id, this.refs.summary.value);
        this.setState({editing: false});
    }
};
