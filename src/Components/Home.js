import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl m-10 font-mono font-bold">Welcome to React-land</h1>
      </div>

      <div className="grid grid-cols-7 grid-rows-2">

        <div className="col-start-2 row-start-1 col-span-3">
          <p>React Components built using the useState hook:</p>
        </div>

        <div className="col-start-2 row-start-2 col-span-1">
          <Link to="/Counter">
            <button className="rounded-md bg-pink-400 hover:bg-pink-500 border-2 border-white p-3 text-white">
              <h1 className="font-bold font-mono">Counter</h1>
            </button>
          </Link>
        </div>

        <div className="col-start-4 row-start-2 col-span-1">
          <Link to="/Colours">
            <button className="rounded-md bg-pink-400 hover:bg-pink-500 border-2 border-white p-3 text-white">
              <h1 className="font-bold font-mono">Colours</h1>
            </button>
          </Link>
        </div>

        <div className="col-start-6 row-start-2 col-span-1">
          <Link to="/Maths">
            <button className="rounded-md bg-pink-400 hover:bg-pink-500 border-2 border-white p-3 text-white">
              <h1 className="font-bold font-mono">Maths</h1>
            </button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default Home
