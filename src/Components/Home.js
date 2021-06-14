import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
    <h1 className="">React-land</h1>
      <div>
        <Link to="/Counter">
          <button className="rounded-md bg-pink-400 border-2 border-white">
            <h1>Counter</h1>
            </button>
          </Link>
      </div>
    </>
  )
}

export default Home
