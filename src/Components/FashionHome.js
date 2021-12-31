import React from 'react'
// import { Link } from 'react-router-dom'

import fashion from '../images/fashion.png'

function FashionHome() {

  return (
    <>
    <div className="flex justify-leftgap-8 text-center text-l border-solid border-black border-b-2"/>
    <img className="h-20 w-52 ml-12" src={fashion} />
    </>
  )
}

export default FashionHome
