import React, { createContext, useReducer, useEffect } from "react";

// 1. Import Reducers
import { initialUser, userReducer } from './userConducer';
import { intialCount, counterReducer } from './countConducer';

// 2. Create Context for everything
const AppContext = createContext();

export function AppContextProvider({ children }) {
    // 7. getItem
    const retrieveState = JSON.parse(localStorage.getItem("persistState"))
    const user = retrieveState ? retrieveState.userState : initialUser;
    const counter = retrieveState ? retrieveState.counterState : intialCount;

    // 3. Reducer set-ups
    const [userState, userDispatch] = useReducer(userReducer, user);
    const [counterState, counterDispatch] = useReducer(counterReducer, counter);

    // 4. AppContext: Combine all needed variables
    const value = { userState, userDispatch, counterState, counterDispatch };
    counterState

    // 6. setItem
    const persistState = { userState, counterState };
    useEffect(() => {
        localStorage.setItem("persistState", JSON.stringify(persistState))
    }, [userState, counterState])


    // 5. Nest children in Context.Provider
    return (
        < AppContext.Provider value={value} >
            {children}
        </AppContext.Provider >
    );
}
export default AppContext;