import React, { useReducer } from 'react';
import UserDashboard from './components/UserDashboard';
import Counter from './components/Counter';


// Import Styles
import './styles/App.css';
import { LineCharReact } from './components/lineChartReact';
import LineChartReactMartin from './components/LineChartReactMartin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
        {/* <Counter /> */}
        <LineChartReactMartin />

      </header>
    </div>
  )
};

export default App;
