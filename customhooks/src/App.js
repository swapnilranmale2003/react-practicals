import './App.css';
import React from 'react'
import useCounter from './useCounter';

function App() {

  const [count, increment, decrement] = useCounter();
  
  return (
    <div className="App">
      <h1>Custom Hooks in react.js</h1>
      <div>
        <h1> {count} </h1>
      </div>
      <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement </button>
      </div>
    </div>
  );
}

export default App;
