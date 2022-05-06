import React, { useReducer } from 'react';
import Counter from './components/Counter';


// Import Styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
        <Counter />
      </header>
    </div>
  )
};

export default App;
