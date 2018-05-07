
References:

https://hashnode.com/post/simple-react-redux-app-civ45zywh03qdgc5327399ly0

https://www.valentinog.com/blog/react-redux-tutorial-beginners/

https://lorenstewart.me/2016/11/27/a-practical-guide-to-redux/

1. npx create-react-app react-rout-redux
1. cd react-rout-redux/
1. npm install --save react-router-dom
1. npm install --save react-bootsrap
1. npm install --save react-redux
1. npm install --save redux
1. npm install --save redux-logger
1. npm install --save redux-promise-middleware
1. npm install --save redux-thunk
1. npm install --save axios

## React Router v4

/src/index.js
```javascript
. . .
import { BrowserRouter } from "react-router-dom"
. . .
ReactDOM.render(
    <BrowserRouter>
. . .
            <App />
. . .
    </BrowserRouter>
```

/src/App.js
```javascript
. . .
import { Link, Route } from "react-router-dom";
. . .
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/comments">Comments</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/todos">Todos</Link></li>
. . .
        <Route exact={ true } path="/" component={ Home }/>
        <Route path="/comments" component={ Comments }/>
        <Route path="/posts" component={ Posts }/>
        <Route path="/todos" component={ Todos }/>
. . .
```

## React Redux

/src/index.js
```javascript
. . .
import { Provider } from "react-redux"

import store from "./States/Store"
. . .
ReactDOM.render(
. . .
        <Provider store={ store }>
. . .
        </Provider>
. . .
```

/src/States/Store/index.js
```javascript
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise, thunk, logger;

const reducers = combineReducers({
. . .
export const store = createStore(reducers, middleware);
```

## The Promise Way

/src/Components/Comments/index.js
```javascript
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchComments } from '../../States/Actions/comments';

class Comments extends Component {

    componentWillMount = () => {
        this.props.fetchComments();
    }

. . .

                <ul className="list-group list-group-flush">
                    { this.props.comments.length > 0 && this.props.comments.map( each => (
                        <li className="list-group-item" key={each.id}>
                            {each.name}
                        </li>
                    ) ) }
                </ul>

. . .

const mapStateToProps = state => {
    return state.comments;
};

const mapDisptachToProps = {
    fetchComments
};

export default connect(mapStateToProps, mapDisptachToProps)(Comments);
```

/src/States/Actions/comments.js
```javascript

...

export function fetchComments() {
    return {
        type: FETCH_COMMENT,
        payload: axios.get('https://jsonplaceholder.typicode.com/comments')
    };
}

```

/src/States/Reducers/comments.js
```javascript

. . .

const commentsReducer = ( state = initComments, action ) => {
    const stateChanger = {

        FETCH_COMMENT_FULFILLED: () => {
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments: action.payload.data
            };
        },
. . .

    return stateChanger.hasOwnProperty(action.type) ? stateChanger[action.type]() : state;
};

export default commentsReducer;

```

/src/States/Store/index.js
```javascript
. . .

const reducers = combineReducers({
    comments: commentsReducer

. . .

import commentsReducer from '../Reducers/comments';

. . .
```

## Nothing but the Thunk

/src/Components/Posts/index.js
```javascript

. . .

import { fetchPosts } from '../../States/Actions/posts';

. . .

class Posts extends Component {

    componentWillMount = () => {
        this.props.fetchPosts();
    }

. . .

                    { this.props.posts.length > 0 && this.props.posts.map( each => (
                        <li className="list-group-item" key={each.id}>
                            <p><b>Title:</b> <em>{each.title}</em></p>
                            <p>{each.body}</p>
                        </li>
                    ) ) }

. . .

const mapDisptachToProps = {
    fetchPosts
};

export default connect(mapStateToProps, mapDisptachToProps)(Posts);
```

/src/States/Actions/posts.js
```javascript
import {
    FETCH_POST_FAILURE,
    FETCH_POST_PENDING,
    FETCH_POST_SUCCESS,
} from "../../Constants/actionTypes";

. . .

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (res) => {
                dispatch({
                    type: FETCH_POST_SUCCESS,
                    payload: res
                })
            })
            .catch( (err) => {
                dispatch({
                    type: FETCH_POST_FAILURE,
                    payload: err
                })
            })
```

/src/States/Reducers/posts.js
```javascript

. . .

const postsReducer = ( state = initPosts, action ) => {
    const stateChanger = {

. . .

        FETCH_POST_SUCCESS: () => {
            return {
                ...state,
                fetching: false,
                fetched: true,
                posts: action.payload.data
            };
        },

. . .

```

/src/States/Store/index.js
```javascript
. . .

import postsReducer from '../Reducers/posts';

. . .

const reducers = combineReducers({
    comments: commentsReducer,
    posts: postsReducer,

. . .
```