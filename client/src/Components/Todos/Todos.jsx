/* client/src/Components/Todos/Todos.jsx */

import './Todos.css';

import React, { Component } from 'react';
import { connect } from "react-redux";

import FloatAddItem from '../FloatAddItem';

import { fetchTodos } from '../../States/Actions/todos';

class Todos extends Component {

    componentWillMount = () => {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="Todos">
                <div>
                    <h4>Todos</h4>
                    <ul className="list-group list-group-flush">
                        { this.props && this.props.todos
                          && this.props.todos.length > 0 && this.props.todos.map ( each => (
                            <li className="list-group-item" key={each.id}>
                                <p><b>Title:</b> <em>{each.title}</em></p>
                            </li>
                        ) ) }
                    </ul>
                </div>
                <div>
                    <FloatAddItem category="tods"/>
                </div>
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
