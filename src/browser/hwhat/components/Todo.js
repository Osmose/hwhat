import React, {Component, PropTypes} from 'react';


export default class Todo extends Component {
    static propTypes = {
        summary: PropTypes.string.isRequired,
    };

    render() {
        let {summary} = this.props;

        return (
            <li>
                <span>{summary}</span>
                <button onClick={::this.onClickDelete}>Delete</button>
            </li>
        );
    }

    onClickDelete() {
        this.props.onClickDelete(this.props.id);
    }
};
