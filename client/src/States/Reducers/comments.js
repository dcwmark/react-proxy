/* src/States/Reducers/comments.js */

// import {
//     FETCH_COMMENT_PENDING,
//     FETCH_COMMENT_REJECTED,
//     FETCH_COMMENT_FULFILLED
// } from "../../Constants/actionTypes";

const initComments = {
    fetching: false,
    fetched: false,
    comments: [],
    error: null
};

const commentsReducer = ( state = initComments, action ) => {
    const stateChanger = {
        FETCH_COMMENT_PENDING: () => {
            return {
                ...state,
                fetching: true
            };
        },
        FETCH_COMMENT_FULFILLED: () => {
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments: action.payload.data
            };
        },
        FETCH_COMMENT_REJECTED: () => {
            return {
                ...state,
                fetching: false,
                error: action.payload.error
            };
        },
    };
    return stateChanger.hasOwnProperty(action.type) ? stateChanger[action.type]() : state;
};

export default commentsReducer;
