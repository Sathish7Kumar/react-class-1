import React, { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import ProductList from "./ProductList";

function ProductDisplay() {

    const [count , setCount] = useState(0)

  const { id } = useParams();

  const product = ProductList.find((item) => item._id === id);

  const nav = useNavigate()

  const backBtn = (e) =>{
    e.preventDefault()
    nav('/products')
  }


  if (!product) {
    return (
    <>
    <div>Product Not Found </div>
    <button onClick={backBtn}>Back to Mobile</button>
    </>
    )
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img height={100} width="100px" src={product.image} /> 
      <p>Specs : {product.desc}</p>
      <h4>Price : {product.price}</h4>
      <h3>Count Product : {count}</h3>
      <button onClick={()=>setCount(count +1)}>Add To cart</button>
      <button onClick={backBtn}>Back to Mobile Page</button>
    </div>
  );
}



export default ProductDisplay;