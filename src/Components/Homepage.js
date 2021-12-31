import React from 'react'
// import { Link } from 'react-router-dom'

// IMAGES:
import logo from '../images/voguelogo.png'

function Homepage() {

  return (
    <>
    <div className="border-solid border-black border-t-8"/>
    <div className="border-solid border-black border-t-8">
        <div className="grid grid-rows-1 grid-cols-3">
            <div className="col-start-1 col-span-1">
                <img src={logo} alt="Vogue logo" className="h-36 w-102 mt-5 mb-4"/>
            </div>
            <div className="col-start-3 col-span-1">
                <div className="dropdown">
                    <p className="inline-block text-red-500 text-sm mt-10 ml-12 font-semibold mr-3">Edition: </p>
                        <button onclick="myFunction()" class="dropbtn text-left text-sm hover:text-red-500 mt-10 font-semibold cursor-pointer w-40">New Zealand ↓</button>
                        <div id="myDropdown" className="overflow-auto dropdown-content hidden">
                            <a href="#" className="block text-sm hover:text-red-500 ml-32 font-semibold cursor-pointer w-40 mt-2">Australia</a>
                            <a href="#" className="block text-sm hover:text-red-500 ml-32 font-semibold cursor-pointer w-40 mt-2">France</a>
                            <a href="#" className="block text-sm hover:text-red-500 ml-32 font-semibold cursor-pointer w-40 mt-2">Japan</a>
                            <a href="#" className="block text-sm hover:text-red-500 ml-32 font-semibold cursor-pointer w-40 mt-2">United States</a>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div className="flex justify-leftgap-8 text-center text-l border-solid border-slate-300 border-t-2">
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-16 font-semibold cursor-pointer">FASHION</a>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-10 font-semibold cursor-pointer">BEAUTY</a>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-10 font-semibold cursor-pointer">CULTURE</a>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-10 font-semibold cursor-pointer">LIFESTYLE</a>
        <a className="text-sm hover:text-red-500 mt-5 mb-5 ml-10 font-semibold cursor-pointer">SHOPPING</a>
    </div>

    <div className="flex justify-leftgap-8 text-center text-l border-solid border-black border-b-2"/>
    <img className="h-20 w-52 ml-12" src="images/fashion.png"/>

    <div className="border-solid border-black border-t-2 mt-12"/>
    <img className="h-20 w-52 ml-12" src="images/culture.png"/>

    <div className="grid grid-rows-1 grid-cols-4">
        <div className="col-start-3 col-span-1 ml-3 mr-3">
            <img src="images/emilyinparis.jpg"></img>
        </div>
    </div>

<div className="mb-12"/>

</>
  )
}
    
export default Homepage