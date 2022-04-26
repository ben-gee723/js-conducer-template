import React, { createContext, useReducer } from "react";

// 1. Import Reducers
import { initialUser, userReducer } from './userConducer';
import { intialCount, counterReducer } from './countConducer';

// 2. Create Context for everything
const AppContext = createContext();

export function AppContextProvider({ children }) {
    // 3. Reducer set-ups
    const [userState, userDispatch] = useReducer(userReducer, initialUser);
    const [counterState, counterDispatch] = useReducer(counterReducer, intialCount);

    // 4. AppContext: Combine all needed variables
    const value = { userState, userDispatch, counterState, counterDispatch };

    // 5. Nest children in Context.Provider
    return (
        < AppContext.Provider value={value} >
            {children}
        </AppContext.Provider >
    );
}
export default AppContext;