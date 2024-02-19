import React from "react";
import products from "./ProductItems";
import Button from "./Button";
import { useParams } from "react-router-dom";

const ProductDetail = ({products}) => {
    const {productsId} = useParams()
    const product = products.find((val)=>{
        return val._id === productsId
    })
    if(!product){
        return <h1>Product not found</h1>
    }
  return (
    <>
      <div className="pro-card">
        {products.map((val)=>{
            return (
                <>
                <h2>{val.name}</h2>
              <img
                src={val.image}
                style={{ height: "200px", width: "200px" }}
              />
              <p>Spec : {val.desc}</p>
              <h4>Price : {val.price}</h4>
              <Button />
                </>
            )
        })}
              
      </div>
    </>
  );
};

export default ProductDetail;

{
  /* <div className='pro-card'>

  hooks -> function _> useState

</div> */



}
