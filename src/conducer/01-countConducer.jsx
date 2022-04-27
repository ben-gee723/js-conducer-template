// 1. import createContext
import React, { createContext } from "react";

// 2. Create Context (if required)
const CounterContext = createContext();

// 3. Create defaultState
export const defaultCount = {
    count: 0
};

// 4. Create the ReducerFunction
export function counterReducer(state, action) {
    console.log("state", state.count)
    switch (action.type) {
        case 'INCREASE':
            return { count: state.count + 1 };
        case 'DECREASE':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

// 5. export default context
export default CounterContext;