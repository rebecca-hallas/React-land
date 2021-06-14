import './App.css';
import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <h3>Welcome to the App component. This component has utilised the useState() function which is built-in to React. The initial state (count) is set to 1. The setCount() function returns the current count + 1, every time you click the Add button. Have fun clicking!</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </header>
    </div>
  );
}

export default App;
