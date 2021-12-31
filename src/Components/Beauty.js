import React from 'react';
import beautytitle from '../images/beautytitle.png'
import Homepage from './Homepage';

function Beauty() {

  return (
    <>
    <Homepage />
    <div className="grid grid-rows-2 grid-cols-3">
        <div className="col-start-1 col-span-1 items-center" />
        <div className="col-start-2 col-span-1 items-center flex items-center justify-center">
            <img src={beautytitle} className="h-36 w-96 self-center" />
        </div>
        <div className="col-start-3 col-span-1 items-center" />
        <div className="col-start-2 col-span-1 row-start-2">
        <div className="text-l border-solid border-slate-300 border-t-2 border-b-2 flex items-center justify-center">
        <p className="text-sm hover:text-red-500 mt-5 mb-5 font-semibold cursor-pointer">All</p>
        <p className="text-sm hover:text-red-500 mt-5 mb-5 ml-5 font-semibold cursor-pointer">Hair</p>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-5 font-semibold cursor-pointer">Makeup</a>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-5 font-semibold cursor-pointer">Skincare</a>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-5 font-semibold cursor-pointer">Wellness</a>
    </div>
    </div>
    </div>
    </>
  );
  
}

export default Beauty;
