import React, {Component, PropTypes} from 'react';


export default class Todo extends Component {
    /*static propTypes = {
        summary: PropTypes.string.isRequired,
        complete: PropTypes.boolean.isRequired,
    };*/

    render() {
        let {summary, complete} = this.props;

        return (
            <li>
                <input
                    type="checkbox"
                    ref="complete"
                    checked={complete}
                    onChange={::this.handleChangeComplete}
                />
                <span>{summary}</span>
                <button onClick={::this.handleClickDelete}>Delete</button>
            </li>
        );
    }

    handleClickDelete() {
        this.props.onDelete(this.props.id);
    }

    handleChangeComplete() {
        this.props.onChangeComplete(this.props.id, this.refs.complete.checked);
    }
};
