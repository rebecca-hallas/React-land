import React from 'react'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// IMAGES:
import logo from '../images/voguelogo.png'

function Header() {

  return (
    <>
    <div className="border-solid border-black border-t-8"/>
    <div className="border-solid border-black border-t-8">
        <div className="grid grid-rows-1 grid-cols-3">
            <div className="col-start-1 col-span-1">
                <Link to='/Home'>
                <img src={logo} alt="Vogue logo" className="h-36 w-102 mt-5 mb-4" />
                </Link>
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

    <div className="flex justify-left gap-8 text-center text-l border-solid border-slate-300 border-t-2">

    <Link to="/Fashion">
        <p className="text-sm hover:text-red-500 mt-5 mb-5 ml-16 font-semibold cursor-pointer">FASHION</p>
    </Link>
    <Link to="/Beauty">
        <p className="text-sm hover:text-red-500 mt-5 mb-5 ml-10 font-semibold cursor-pointer">BEAUTY</p>
    </Link>
    <Link to="/Culture">
        <p className="text-sm hover:text-red-500 mt-5 mb-5 ml-10 font-semibold cursor-pointer">CULTURE</p>
    </Link>
    <Link to="/Lifestyle">
        <p className="text-sm hover:text-red-500 mt-5 mb-5 ml-10 font-semibold cursor-pointer">LIFESTYLE</p>
    </Link>
    <Link to="/Shopping">
        <p className="text-sm hover:text-red-500 mt-5 mb-5 ml-10 font-semibold cursor-pointer">SHOPPING</p>
    </Link>
    </div>

</>
  )
}
    
export default Header
