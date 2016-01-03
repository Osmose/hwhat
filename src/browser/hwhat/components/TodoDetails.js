import React, {Component} from 'react';
import listensToClickOutside from 'react-onclickoutside/decorator';

import TodoNotes from 'hwhat/components/TodoNotes';
import TodoSummary from 'hwhat/components/TodoSummary';


class TodoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        };
    }

    render() {
        let {id, summary, notes, actions} = this.props;

        return (
            <div key={`details-${id}`}> {/* Re-render when id changes */}
                <h3>Details</h3>
                <TodoSummary
                    id={id}
                    summary={summary}
                    actions={actions}
                    onFocus={::this.handleFocus}
                    onBlur={::this.handleBlur}
                />
                <TodoNotes
                    id={id}
                    notes={notes}
                    actions={actions}
                    onFocus={::this.handleFocus}
                    onBlur={::this.handleBlur}
                />
            </div>
        );
    }

    handleClickOutside() {
        if (!this.state.focused) {
            this.props.onClickOutside();
        }
    }

    handleFocus() {
        this.setState({focused: true});
    }

    handleBlur() {
        this.setState({focused: false})
    }
}


export default listensToClickOutside(TodoDetails);
