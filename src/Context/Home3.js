import React, { useContext } from 'react'
import { UserContext } from './ContextHome'

const Home3 = () => {
    const userName = useContext(UserContext)
  return (
    <>
     <h1>My name is {userName} </h1>
    </>
  )
}

export default Home3


