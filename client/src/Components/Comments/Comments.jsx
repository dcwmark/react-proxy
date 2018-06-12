/* src/Components/Comments/Comments.jsx */

import './Comments.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import FloatAddItem from '../FloatAddItem';
import DeleteItem from '../DeleteItem';
import UpdateItem from '../UpdateItem';

import { fetchComments } from '../../States/Actions/comments';

class Comments extends Component {

    componentWillMount = () => {
        this.props.fetchComments();
    }

    render() {
        return (
            <div className="Comments container">
                <div>
                    <h4>Comments</h4>
                    <ul className="list-group list-group-flush row">
                        { this.props && this.props.comments
                          && this.props.comments.length > 0 && this.props.comments.map( each => (
                            <li className="list-group-item col-xs-12" key={each.id}>
                                <div className="col-xs-1">
                                    <div className="col-xs-6 update-item">
                                        <UpdateItem category="comment" />
                                    </div>
                                    <div className="col-xs-6 delete-item">
                                        <DeleteItem category="comment" />
                                    </div>
                                </div>
                                <div className="col-xs-11">
                                    <p><b>Name:</b> <em>{each.name}</em></p>
                                    <p>{each.body}</p>
                                </div>
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
