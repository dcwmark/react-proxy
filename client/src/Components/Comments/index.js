/* src/Components/Comments/index.js */

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchComments } from '../../States/Actions/comments';

class Comments extends Component {

    componentWillMount = () => {
        this.props.fetchComments();
    }

    render() {
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-group list-group-flush">
                    { this.props.comments.length > 0 && this.props.comments.map( each => (
                        <li className="list-group-item" key={each.id}>
                            <p><b>Name:</b> <em>{each.name}</em></p>
                            <p>{each.body}</p>
                        </li>
                    ) ) }
                </ul>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return state.comments;
};

const mapDisptachToProps = {
    fetchComments
};

export default connect(mapStateToProps, mapDisptachToProps)(Comments);
