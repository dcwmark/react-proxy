/* src/States/Actions/comments.js */

import {
    FETCH_COMMENT,
} from "../../Constants/actionTypes";

import axios from "axios";

export function fetchComments() {
    return {
        type: FETCH_COMMENT,
        payload: axios.get('https://jsonplaceholder.typicode.com/comments')
    };
}
