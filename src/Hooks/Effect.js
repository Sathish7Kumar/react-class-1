import React, { useEffect, useState } from 'react'


const Effect = () => {
    const [increment, setincrement] = useState(1000)
    const [decrement, setdecrement] = useState(1000)

    // useEffect
    //1
    // useEffect(()=>{
    //     console.log("use effect execute");
    // })
    //2
    // useEffect(()=>{
    //     console.log("use effect execute");
    // },[decrement])
    //3
    // useEffect(()=>{
    //         console.log("use effect execute");
    // })

    const addCount = () =>{
        setincrement(increment+500)
    }
    const remvCount = () =>{
        setdecrement(decrement-500)
    }

  return (
    <>
    <h1>Increment : {increment}</h1>
    <button onClick={addCount}>Increment</button>
    <h1>Decrement : {decrement}</h1>
    <button onClick={remvCount}>Decrement</button>
    </>
  )
}

export default Effect