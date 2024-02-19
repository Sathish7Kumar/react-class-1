import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>HomePage</h1>
    <Link to='/products'>GOTO MOBILE</Link>
    </>
  )
}

export default Home