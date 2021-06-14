import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
      <div>
        <Link to="/Counter">
          <button>
            <h1>Counter</h1>
            </button>
          </Link>
      </div>
    </>
  )
}

export default Home
