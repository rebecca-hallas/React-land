import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(1)

  return (
    <div>
        <h1>Counter</h1>
        <h2>Fun with useState()</h2>
        <p>Welcome to the App component. This component has utilised the useState() function which is built-in to React. The initial state (count) is set to 1. The setCount() function returns the current count + 1, every time you click the Add button. Have fun clicking!</p>
        <p>State: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click here to update the state</button>
    </div>
  );
}

export default Counter;
