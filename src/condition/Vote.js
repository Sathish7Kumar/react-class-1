import React, { useState } from 'react'

const Vote = () => {

    const [age, setage] = useState("")
    const [message, setmessage] = useState("")

    const handleClick = () =>{
        setmessage(parseInt(age) >=18  ? "u can Vote" : "u cant vote")
    }
    
  return (
    <>
    <h1>Check Vote Age </h1>
    <label>Enter ur Age </label>
    <input type='number' onChange={(e => setage(e.target.value))} placeholder='enter ur age' /> <br/> <br/>
    <button onClick={handleClick}>Check</button>
    {message ? <p>{message}</p> : null}
    </>
  )
}

export default Vote

    // let num = 18
    // if(num >= 18){
    //     console.log("U can vote");
    // }else{
    //     console.log("U cant able to vote");
    // }
    // let result = (num >= 18) ? "U can vote" :"U cant able to vote"