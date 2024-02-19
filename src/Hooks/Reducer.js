import React, { useReducer } from 'react'

const transaction = (state,action) =>{
    switch(action.type){
        case "WITHDRAW" : 
        return state - action.payload
        case "DEPOSIT" :
        return state + action.payload
        default :
        return state
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(transaction, 1000)

    const deposit = (amount) =>{
       dispatch({type : "DEPOSIT", payload:amount})
    }

    const withdraw = (amount) =>{
        dispatch({type : "WITHDRAW", payload:amount})
     }

  return (
    <>
    <h1>Use Reducer</h1>
    <h2>Balance : {state} </h2>
    <button onClick={()=>deposit(500)}>Deposit</button>
    <button onClick={()=>withdraw(500)}>Withdraw</button>
    </>
  )
}

export default Reducer



// import React from 'react'

// const Reducer = () => {
//   return (
//     <>

//     </>
//   )
// }

// export default Reducer