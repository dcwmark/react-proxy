/* src/States/Actions/todos.js */

import {
    FETCH_TODO_FAILURE,
    FETCH_TODO_PENDING,
    FETCH_TODO_SUCCESS,
} from "../../Constants/actionTypes";

import axios from "axios";

export function fetchTodos() {
    return (dispatch) => {
        dispatch({ type: FETCH_TODO_PENDING });
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( (res) => {
            dispatch({
                type: FETCH_TODO_SUCCESS,
                payload: res
            })
        })
        .catch( (err) => {
            dispatch({
                type: FETCH_TODO_FAILURE,
                payload: err
            })
        })
    };
}
