import React, { useReducer } from 'react';
import UserDashboard from './components/UserDashboard';


// Import Styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
        <UserDashboard />
      </header>
    </div>
  )
};

export default App;
