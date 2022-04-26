import React, { useReducer } from 'react';
import UserDashboard from './components/UserDashboard';

// 6. Import Reducers
import AppContext from './conducers/index';
import UserContext, { initialUser, userReducer } from './conducers/userConDucer';
import CounterContext, { intialCount, counterReducer } from './conducers/countConDucer';

// Import Styles
import './App.css';

function App() {
  // 7. Reducer set-ups
  const [userState, userDispatch] = useReducer(userReducer, initialUser);
  const [counterState, counterDispatch] = useReducer(counterReducer, intialCount);

  // 8. AppContext: Combine all needed variables
  const value = { userState, userDispatch, counterState, counterDispatch };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
        {/* 
          9. Nest required components in Context.Provider
          10. --> Go to designed child component
        */}
        <AppContext.Provider value={value}>
          <UserDashboard />
        </AppContext.Provider>
      </header>
    </div>
  )
};

export default App;
