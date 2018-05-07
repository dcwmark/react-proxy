/* src/Components/Todos/index.js */

import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchTodos } from '../../States/Actions/todos';

class Todos extends Component {

    componentWillMount = () => {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div>
                <h4>Todos</h4>
                <ul className="list-group list-group-flush">
                    { this.props && this.props.todos
                      && this.props.todos.length > 0 && this.props.todos.map ( each => (
                        <li className="list-group-item" key={each.id}>
                            <p>
                                <b>Title:</b> <em>{each.title}</em>
                            </p>
                        </li>
                    ) ) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.todos;
};

const mapDisptachToProps = {
    fetchTodos
};

export default connect(mapStateToProps, mapDisptachToProps)(Todos);
