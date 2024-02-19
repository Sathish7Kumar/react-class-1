import React, { useState } from 'react'

const State = () => {

    const [count , setCount] = useState(0)

    const handleClick = () =>{
        setCount(count + 1)
    }

    const [name, setname] = useState("santhosh")

    const handleName = () =>{
      setname("sathish")
      }

      const [counter, setcounter] = useState({value:0, type:"counter"})
      const handleCounter = (e) =>{
        e.preventDefault()
        setcounter((prevValue)=>{
          return {value:prevValue.value + 1}
        })
      }

      // useEffect -> lifecycle

      // useReducer 

  return (
    <>
    <h2>Function Component</h2>
    <h1>Count : {count}</h1>
    <button onClick={handleClick}>ADD</button>
    <h1>{name}</h1>
    <button onClick={handleName}>ADD</button>
    <h1>Counter-From-useState-obj : {counter.value} </h1>
    <button onClick={handleCounter}>ADD</button>
    <State1/>
    <State2/>
    {/* <button onClick={()=>setCount(count+1)}>ADD</button> */}
    </>
  )
}

export default State

// vercel , netlify , render

const State1 = () => {
  return (
    <><h1>I am coming from state 1</h1></>
  )
}

const State2 = () => {
  return (
    <><h1>I am coming from state 2</h1></>
  )
}




