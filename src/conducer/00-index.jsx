import React, { createContext, useReducer, useEffect } from "react";

// 1. Import Reducers
import { initialUser, userReducer } from './02-userConducer';
import { defaultCount, counterReducer } from './01-countConducer';

// 2. Create Context for everything
const AppContext = createContext();


export function AppContextProvider({ children }) {
    // 3.1 getItem
    const retrieveState = JSON.parse(localStorage.getItem("persistState"));
    console.log("1. retrieveState.counterState", retrieveState ? retrieveState.counterState.count : "No State")
    const intialCount = retrieveState ? retrieveState.counterState : defaultCount;

    // 3. Reducer set-ups
    const [userState, userDispatch] = useReducer(userReducer, initialUser);
    const [counterState, counterDispatch] = useReducer(counterReducer, intialCount);
    console.log("2. counterState.count", counterState.count)

    // 4. AppContext: Combine all needed variables
    const value = { userState, userDispatch, counterState, counterDispatch };
    console.log("3. counterState.count", value.counterState.count)

    // 6. setItem
    useEffect(() => {
        localStorage.setItem("persistState", JSON.stringify(value))
    }, [value])
    console.log("4. counterState.count", value.counterState.count)

    // 5. Nest children in Context.Provider
    return (
        < AppContext.Provider value={value} >
            {children}
        </AppContext.Provider >
    );
}
export default AppContext;