/* src/Components/Posts/index.js */

import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchPosts } from '../../States/Actions/posts';

class Posts extends Component {

    componentWillMount = () => {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h4>Posts</h4>
                <ul className="list-group list-group-flush">
                    { this.props.posts.length > 0 && this.props.posts.map( each => (
                        <li className="list-group-item" key={each.id}>
                            <p><b>Title:</b> <em>{each.title}</em></p>
                            <p>{each.body}</p>
                        </li>
                    ) ) }
                </ul>
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
