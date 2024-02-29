import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Cart = ({cartItems, removeCart, calcTotal , clearCart}) => {

    const nav = useNavigate()
    const handleProceed =()=>{
        nav('/payment')
    }
  return (
    <>
    <div>
        <h1>Food in Cart</h1>
        {cartItems.length > 0 ? 
        <>
        <div>
            <button onClick={clearCart}>Clear cart</button>
        {cartItems.map((item,index)=>{
            return(
                <>
                <h2>{item.name}</h2>
                <img src={item.image} />
                <h4>Price {item.price}</h4>
                <button onClick={()=>removeCart(index)} >Remove from Cart</button>
                </>
            )
        })}
        </div>
        <h1>Total Price : {calcTotal()} </h1>
        <button onClick={handleProceed}>Proced To payement</button>
        </> 
            : 
        <>
        <h1>Ur cart is empty</h1>
        <Link to='/'>Go to home</Link>
        </>}
    </div>
    </>
  )
}

export default Cart