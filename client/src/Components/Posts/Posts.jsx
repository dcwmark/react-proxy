/* client/src/Components/Posts/Posts.jsx */

import './Posts.css';

import React, { Component } from 'react';
import { connect } from "react-redux";

import FloatAddItem from '../FloatAddItem';
import DeleteItem from '../DeleteItem';
import UpdateItem from '../UpdateItem';

import { fetchPosts } from '../../States/Actions/posts';

class Posts extends Component {

    componentWillMount = () => {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="Posts container">
                <div>
                    <h4>Posts</h4>
                    <ul className="list-group list-group-flush row">
                        { this.props && this.props.posts
                          && this.props.posts.length > 0 && this.props.posts.map( each => (
                            <li className="list-group-item col-xs-12" key={each.id}>
                                <div className="col-xs-1">
                                    <div className="col-xs-6 update-item">
                                        <UpdateItem category="post" />
                                    </div>
                                    <div className="col-xs-6 delete-item">
                                        <DeleteItem category="post" />
                                    </div>
                                </div>
                                <div className="col-xs-11">
                                    <p><b>Title:</b> <em>{each.title}</em></p>
                                    <p>{each.body}</p>
                                </div>
                            </li>
                        ) ) }
                    </ul>
                </div>
                <div>
                    <FloatAddItem category="post" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.posts;
};

const mapDisptachToProps = {
    fetchPosts
};

export default connect(mapStateToProps, mapDisptachToProps)(Posts);
