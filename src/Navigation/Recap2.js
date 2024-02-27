import React from 'react'

// const Recap2 = (props) => {
//   return (
//     <div>
//         <h1>Hello From Recap 2</h1>
//         <h2>My name is {props.myname} , age is {props.myage}</h2>
//     </div>
//   )
// }

const Recap2 = ({myname,myage}) => {
    return (
      <div>
          <h1>Hello From Recap 2</h1>
          <h2>My name is {myname} , age is {myage}</h2>
      </div>
    )
  }

export default Recap2