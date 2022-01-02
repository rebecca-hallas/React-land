import React from 'react';
import Header from './Header';

function Culture() {

  return (
    <>
    <Header />
    <div className="border-solid border-slate-300 border-t-2"/>
    <div className="grid grid-rows-2 grid-cols-3">
        <div className="col-start-1 col-span-1 items-center" />
        <div className="col-start-2 col-span-1 items-center flex items-center justify-center">
          <p className="mt-10 mb-10 text-center font-serif text-5xl">Culture</p>
        </div>
        <div className="col-start-3 col-span-1 items-center" />
        <div className="col-start-2 col-span-1 row-start-2">
        <div className="text-l border-solid border-slate-300 border-t-2 border-b-2 flex items-center justify-center">
        <p className="text-sm hover:text-red-500 mt-5 mb-5 font-semibold cursor-pointer">All</p>
        <p className="text-sm hover:text-red-500 mt-5 mb-5 ml-5 font-semibold cursor-pointer">Books</p>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-5 font-semibold cursor-pointer">Music</a>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-5 font-semibold cursor-pointer">Art</a>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-5 font-semibold cursor-pointer">Society</a>
    </div>
    </div>
    </div>
    </>
  );
  
}

export default Culture;
