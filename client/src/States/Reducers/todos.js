/* src/States/Reducers/todos.js */

// import {
//     FETCH_TODO_FAILURE,
//     FETCH_TODO_PENDING,
//     FETCH_TODO_SUCCESS
// } from "../../Constants/actionTypes";

const initTodos = {
    fetching: false,
    fetched: false,
    todos: [],
    error: null
};

const todosReducer = ( state = initTodos, action ) => {
    const stateChanger = {
        FETCH_TODO_PENDING: () => {
            return {
                ...state,
                fetching: true
            };
        },
        FETCH_TODO_SUCCESS: () => {
            return {
                ...state,
                fetching: false,
                fetched: true,
                todos: action.payload.data
            };
        },
        FETCH_TODO_FAILURE: () => {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        },
    };
    return stateChanger.hasOwnProperty(action.type) ? stateChanger[action.type]() : state;
};

export default todosReducer;

