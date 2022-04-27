// 1. import createContext
import React, { createContext } from "react";

// 2. Create the context (if required)
export const UserContext = createContext();

// 3. Create the initialState
const defaultState = {
    name: "Ben",
    email: "apples@gmail.com",
    isLogin: false
};
// 3.1 getItem
const retrieveState = JSON.parse(localStorage.getItem("persistState"));
export const initialUser = retrieveState ? retrieveState.userState : defaultState;

// 4. Create the Reducer
export function userReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return state = action.data;
        case 'LOGOUT':
            return state = action.data;
        case 'UPDATE':
            return state = action.data;
        default:
            throw new Error();
    }
}

// 5. export default context
export default UserContext;