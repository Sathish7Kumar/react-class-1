// import React, { useMemo, useState } from 'react'

// const Memo = () => {

//     const [arr, setArr] = useState([10,25,22])
//     const [count, setcount] = useState(5)

//     function max(){
//         console.log("max fun rerender" );
//         return Math.max(...arr)
//     }

//     const val = useMemo(()=> max() , [arr] )

//   return (
//     <>
//     <h1> My Array : {JSON.stringify(arr)}</h1>
//     <h1> Counter {count}</h1>
//     <h1>Max Val : {val}</h1>
//     <button onClick={()=>setcount(count+1)}>ADD COUNT</button>
//     <button onClick={()=> setArr([...arr,Math.floor((Math.random()*100))])}>Add Array</button>
//     </>
//   )
// }

// export default Memo

import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [render, setrender] = useState()
    const [change, setchange] = useState()

    function random(){
        console.log("func called");
        let randomNum = ""
        for (let i = 0 ; i<= 100000000 ; i++){ // 0 to 9999999
            if(i === 9999999){
                randomNum = Math.round(Math.random()*100) 
            }
        }
        return randomNum
    }
    console.log("re-render");

   const val = useMemo(()=> random(),[change])

  return (
    <>
    <h1>{val}</h1>
    <button onClick={()=>setrender(Math.round(Math.random()*100))}>Render</button>
    <button onClick={()=>setchange(Math.round(Math.random()*100))}>Change Random</button>

    </>
  )
}

export default Memo