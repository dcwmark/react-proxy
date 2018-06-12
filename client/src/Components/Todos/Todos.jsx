/* client/src/Components/Todos/Todos.jsx */

import './Todos.css';

import React, { Component } from 'react';
import { connect } from "react-redux";

import FloatAddItem from '../FloatAddItem';
import DeleteItem from '../DeleteItem';
import UpdateItem from '../UpdateItem';

import { fetchTodos } from '../../States/Actions/todos';

class Todos extends Component {

    componentWillMount = () => {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="Todos container">
                <div>
                    <h4>Todos</h4>
                    <ul className="list-group list-group-flush row">
                        { this.props && this.props.todos
                          && this.props.todos.length > 0 && this.props.todos.map( each => (
                            <li className="list-group-item col-xs-12" key={each.id}>
                                <div className="col-xs-1">
                                    <div className="col-xs-6 update-item">
                                        <UpdateItem category="todo" />
                                    </div>
                                    <div className="col-xs-6 delete-item">
                                        <DeleteItem category="todo" />
                                    </div>
                                </div>
                                <div className="col-xs-11">
                                    <p><b>Title:</b> <em>{each.title}</em></p>
                                </div>
                            </li>
                        ) ) }
                    </ul>
                </div>
                <div>
                    <FloatAddItem category="todo"/>
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
