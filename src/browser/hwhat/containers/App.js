import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todoActions from 'hwhat/actions/todos';
import AddTodo from 'hwhat/components/AddTodo';
import TodoDetails from 'hwhat/components/TodoDetails';
import TodoList from 'hwhat/components/TodoList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingId: null,
        };
    }

    render() {
        let {todos, actions} = this.props;

        return (
            <div>
                <AddTodo actions={actions} />
                <TodoList
                    todos={todos}
                    actions={actions}
                    onSelectTodo={::this.handleSelectTodo}
                />
                {this.editingTodo
                    ? <TodoDetails
                        actions={actions}
                        id={this.state.editingId}
                        onClickOutside={::this.handleClickOutsideDetails}
                        {...this.editingTodo}
                      />
                    : null}
            </div>
        );
    }

    get editingTodo() {
        if (this.state.editingId) {
            return this.props.todos[this.state.editingId];
        } else {
            return null;
        }
    }

    handleSelectTodo(id) {
        this.setState({editingId: id});
    }

    handleClickOutsideDetails(event) {
        this.setState({editingId: null});
    }
}

// Convert immutable state to normal JS for React.
function mapStateToProps(state) {
    return state.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
