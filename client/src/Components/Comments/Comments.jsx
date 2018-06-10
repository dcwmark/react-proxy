/* src/Components/Comments/Comments.jsx */

/* src/Components/Comments/Comments.jsx */

import './Comments.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import FloatAddItem from '../FloatAddItem';

import { fetchComments } from '../../States/Actions/comments';

class Comments extends Component {

    componentWillMount = () => {
        this.props.fetchComments();
    }

    render() {
        return (
            <div className="Comments">
                <div>
                    <h4>Comments</h4>
                    <ul className="list-group list-group-flush">
                        { this.props && this.props.comments
                          && this.props.comments.length > 0 && this.props.comments.map( each => (
                            <li className="list-group-item" key={each.id}>
                                <p><b>Name:</b> <em>{each.name}</em></p>
                                <p>{each.body}</p>
                            </li>
                        ) ) }
                    </ul>
                </div>
                <div>
                    <FloatAddItem category="comment" />
                </div>
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
