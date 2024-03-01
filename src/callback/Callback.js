import React, { useCallback, useState } from 'react'
import ProductCall from './ProductCall'

const Callback = () => {
    const [product, setproduct] = useState(["Mobile", "Grocery"])
    const [count, setcount] = useState(0)
    const [cart, setcart] = useState(0)
    // const handleCount = () =>{
    //     setcount(count+1)
    // }
    
    const addCart = useCallback(() =>{
        setcart(cart + 1)
    },[cart])

  return (
    <>
    <div>
        <h2>Count is {count}</h2>
        {/* <button onClick={handleCount}>ADD COUNT</button> */}
        <button onClick={()=>setcount(count+1)}>ADD COUNT</button>
        <br/>  <br/>
        <h3>Cart Value is {cart}</h3>
        <br/>
        {product.map((e,i)=>{
            return <ProductCall addCart={addCart} name={e} key={i} />
        })}
    </div>
    </>
  )
}

export default Callback