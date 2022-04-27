// 1. import createContext
import React, { createContext } from "react";

// 2. Create Context (if required)
const CounterContext = createContext();

// 3. Create the initialState
export const intialCount = {
    count: 0
};

// 4. Create the Reducer
export function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return state = state + 1;
        case 'DECREASE':
            return state = state - 1;
        default:
            throw new Error();
    }
}

// 5. export default context
export default CounterContext;