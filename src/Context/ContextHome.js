import React, { createContext, useContext, useState } from 'react'
import Home1 from './Home1'

export const UserContext = createContext();

const ContextHome = () => {

  const [myname] = useState("SATHISH")
  
  return (
    <UserContext.Provider value={myname}>
    <h1>Hello Context-Home</h1>
    <Home1 />
    </UserContext.Provider>
  )
}

export default ContextHome


// const Home1 = () => {
//   return (
//     <>
//     {/* <h1>Hello {props.name}</h1> */}
//     <h1>Hello Home1 </h1>
//     <Home2 />
//     </>
//   )
// }

// const Home2 = () => {
//   return (
//     <>
//     <h1>Hello Home2</h1>
//     <Home3/>
//     </>
//   )
// }

// const Home3 = () => {
//   const userName = useContext(UserContext)
// return (
//   <>
//    <h1>My name is {userName} </h1>
//   </>
// )
// }

