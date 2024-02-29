import React from 'react'
import { Link } from 'react-router-dom'


const Home = ({FoodData,cartItems,addToCart}) => {

  return (
    <>
    <Link to="/cart">Cart {cartItems.length} </Link>
    <h1>HomePage</h1>

    <div>
        {FoodData.map((item,index)=>{
            return (
                <>
                <h1>{item.name}</h1>
                <img src={item.image} />
                <h3>{item.subItemsData.name}</h3>
                <div>
                    {item.subItemsData.subItems.map((subitem)=>{
                            return(
                                <>
                                <h3>{subitem.name}</h3>
                                <img src={subitem.image} />
                                <p>{subitem.description}</p>
                                <h4>Price : {subitem.price}</h4>
                                <button onClick={()=>addToCart(subitem)}>Add to cart</button>
                                </>
                            )
                    })}
                </div>
                </>
            )
        })}
    </div>
    
    </>
  )
}

export default Home
