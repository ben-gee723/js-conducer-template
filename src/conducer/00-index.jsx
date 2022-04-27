import React, { createContext, useReducer, useEffect } from "react";

// 1. Import Reducers
import { defaultState, userReducer } from './02-userConducer';
import { defaultCount, counterReducer } from './01-countConducer';

// 2. Create Context for everything
const AppContext = createContext();

// 3. getItem
const retrieveState = JSON.parse(localStorage.getItem("persistState"));
const intialCount = retrieveState ? retrieveState.counterState : defaultCount;
const initialUser = retrieveState ? retrieveState.userState : defaultState;

export function AppContextProvider({ children }) {

    // 3. Reducer set-ups
    const [userState, userDispatch] = useReducer(userReducer, initialUser);
    const [counterState, counterDispatch] = useReducer(counterReducer, intialCount);

    // 4. AppContext: Combine all needed variables
    const value = { userState, userDispatch, counterState, counterDispatch };

    // 5. setItem
    useEffect(() => {
        localStorage.setItem("persistState", JSON.stringify(value))
    }, [value])

    // 6. Nest children in Context.Provider
    return (
        < AppContext.Provider value={value} >
            {children}
        </AppContext.Provider >
    );
}

// 7. Export AppContext as default
export default AppContext;