// 1. import createContext
import React, { createContext } from "react";

// 2. Create the context
export const UserContext = createContext();

// 3. Create the initialState
export const initialUser = {
    name: "Ben",
    email: "apples@gmail.com",
    isLogin: false
};
// 4. Create the Reducer
export function userReducer(state, action) {
    switch (action.type) {
        case 'UPDATE':
            return state = action.data;
        default:
            throw new Error();
    }
}

// 5. export default context
export default UserContext;