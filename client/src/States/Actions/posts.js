/* src/States/Actions/posts.js */

import {
    FETCH_POST_FAILURE,
    FETCH_POST_PENDING,
    FETCH_POST_SUCCESS,
} from "../../Constants/actionTypes";

import axios from "axios";

export function fetchPosts() {
    return (dispatch) => {
        dispatch({ type: FETCH_POST_PENDING });
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('http://localhost:3000/api/posts')
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
    };
}
