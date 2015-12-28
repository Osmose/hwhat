import React, {Component} from 'react';

import {store} from 'hwhat';


export default class TodoSummaryEditor extends Component {
    render() {
        return (
            <form onSubmit={::this.handleSave}>
                <input type="text"
                       name="summary"
                       ref="summary"
                       defaultValue={this.props.summary}
                       onBlur={::this.handleSave}
                />
            </form>
        );
    }

    componentDidMount() {
        let summary = this.refs.summary;
        summary.focus();

        let last = summary.value.length;
        summary.setSelectionRange(last, last);
    }

    handleSave(event) {
        event.preventDefault();
        this.props.onSave(this.refs.summary.value);
    }
};
