import React, { useState } from 'react'
import Recap2 from './Recap2'

const Recap = () => {

    const [name, setName] = useState("santhosh")
    const [count, setCount] = useState(0)


    const handleClick = () =>{
        setCount(count+1)
    }

  return (
    <>
    <h1>My name is {name}</h1>
    <button onClick={()=>setName("SATZ")}>Change Name</button>
    <h1>Count Value {count}</h1>
    <button onClick={handleClick}>Add</button>

    <Recap2 myname="santhosh" myage="15"/>
    </>
  )
}

export default Recap