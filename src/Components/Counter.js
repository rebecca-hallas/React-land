import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1 className="text-4xl mt-16 mb-3 font-mono font-bold text-center">Counter</h1>
      <h2 className="text-lg mb-12 font-bold text-center">Fun with useState()</h2>

      <div className="grid grid-cols-4 grid-rows-4">

        <div className="col-start-2 col-span-2 row-start-1 text-justify">
          <p>Welcome to the Counter component! This component has utilised the useState() function which is built-in to React. The initial state (count) is set to 1. The setCount() function returns the current count + 1, every time you click the button. Have fun clicking!</p>
        </div>
        
        <div className="mt-12 col-start-2 col-span-2 row-start-2">
          <p className="text-center">State: {count}</p>
        </div>
        
        <div className="mt-6 col-start-2 col-span-2 row-start-3 text-center">
          <button className="rounded-md bg-pink-400 hover:bg-pink-500 border-2 border-white p-3 text-white" onClick={() => setCount(count + 1)}>Update State</button>
        </div>

      </div>
    </>
  );
}

export default Counter;
