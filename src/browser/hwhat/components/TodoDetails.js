import React, {Component} from 'react';

import TodoSummary from 'hwhat/components/TodoSummary';


export default class TodoDetails extends Component {
    render() {
        let {id, summary, actions} = this.props;

        return (
            <div>
                <h3>Details</h3>
                <TodoSummary id={id} summary={summary} actions={actions} />
            </div>
        );
    }
}
