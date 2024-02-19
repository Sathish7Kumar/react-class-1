// Home.js
// import React from 'react'
import { Link, } from 'react-router-dom'
import '../App.css'

const Home = (x) => {

  return (
    <>
    <h1>{x.name}</h1>
    <Link className = "cart" to="/cart">CART</Link>
    </>
  )
}

export default Home

// LifeCycle - class 
// didMount
// didUpdate
// unmount

// lifecycle - human -> child _ adult_ older 













