import React, { useState } from 'react';

function getRandomNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (10 - 1 + 1) + min); 
  }

function Maths() {
  const [number, setNumber] = useState('?')

  return (
    <>
      <h1 className="text-4xl mt-16 mb-3 font-bold text-center">Magic Button</h1>
      <h2 className="text-md mb-12 font-bold text-center">Think of a number between 1 and 10! Then let the magic button guess what number you thought of. Was the magic button correct?</h2>

      <div className="grid grid-cols-9 grid-rows-4">
        
        <div className="col-start-5 col-span-1 row-start-1">
          <p className="text-3xl mb-12 font-bold text-center">{number}</p>
        </div>
        
        <div className="mt-6 col-start-5 col-span-1 row-start-2 text-center">
          <button className="rounded-md bg-yellow-500 hover:bg-yellow-600 border-2 border-white p-3 text-white" onClick={() => setNumber(getRandomNumber())}>Magic Button</button>
        </div>

      </div>
    </>
  );
  
}

export default Maths;
