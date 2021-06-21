import React, { useState } from 'react';

function Colours() {
  const [colour, setColour] = useState({ height: '100px', width: '100px', backgroundColor: 'blue' })

  return (
    <>
      <h1 className="text-4xl mt-16 mb-3 font-mono font-bold text-center">Colours</h1>
      <h2 className="text-lg mb-12 font-bold text-center">Fun with useState()</h2>

      <div className="grid grid-cols-9 grid-rows-4">
        
        <div className="col-start-5 col-span-1 row-start-1">
          <div style={colour} />
        </div>
        
        <div className="mt-6 col-start-2 col-span-1 row-start-3 text-center">
          <button className="rounded-md bg-yellow-500 hover:bg-yellow-600 border-2 border-white p-3 text-white" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'orange' })}>Orange</button>
        </div>

        <div className="mt-6 col-start-3 col-span-1 row-start-3 text-center">
          <button className="rounded-md bg-red-500 hover:bg-red-600 border-2 border-white p-3 text-white" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'red' })}>Red</button>
        </div>

        <div className="mt-6 col-start-4 col-span-1 row-start-3 text-center">
          <button className="rounded-md bg-green-400 hover:bg-green-500 border-2 border-white p-3 text-white" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'green' })}>Green</button>
        </div>

        <div className="mt-6 col-start-5 col-span-1 row-start-3 text-center">
          <button className="rounded-md bg-purple-400 hover:bg-purple-500 border-2 border-white p-3 text-white" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'rebeccaPurple' })}>Purple</button>
        </div>

        <div className="mt-6 col-start-6 col-span-1 row-start-3 text-center">
          <button className="rounded-md bg-pink-400 hover:bg-pink-500 border-2 border-white p-3 text-white" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'hotPink' })}>Pink</button>
        </div>

        <div className="mt-6 col-start-7 col-span-1 row-start-3 text-center">
          <button className="rounded-md bg-yellow-300 hover:bg-yellow-400 border-2 border-white p-3 text-white" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'yellow' })}>Yellow</button>
        </div>

        <div className="mt-6 col-start-8 col-span-1 row-start-3 text-center">
          <button className="rounded-md bg-blue-400 hover:bg-blue-500 border-2 border-white p-3 text-white" onClick={() => setColour({ height: '100px', width: '100px', backgroundColor: 'blue' })}>Blue</button>
        </div>

      </div>
    </>
  );
  
}

export default Colours;
