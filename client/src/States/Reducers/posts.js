/* src/States/Reducers/posts.js */

// import {
//     FETCH_POST_FAILURE,
//     FETCH_POST_PENDING,
//     FETCH_POST_SUCCESS,
// } from "../../Constants/actionTypes";

const initPosts = {
    fetching: false,
    fetched: false,
    posts: [],
    error: null
};

const postsReducer = ( state = initPosts, action ) => {
    const stateChanger = {
        FETCH_POST_PENDING: () => {
            return {
                ...state,
                fetching: true
            };
        },
        FETCH_POST_SUCCESS: () => {
            return {
                ...state,
                fetching: false,
                fetched: true,
                posts: action.payload.data
            };
        },
        FETCH_POST_FAILURE: () => {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        },
    };
    return stateChanger.hasOwnProperty(action.type) ? stateChanger[action.type]() : state;
};

export default postsReducer;
