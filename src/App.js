import './App.css';
import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </header>
    </div>
  );
}

export default App;
