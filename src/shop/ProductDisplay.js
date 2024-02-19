import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

// import products from "./ProductItems";

const ProductDisplay = ({products}) => {
    // array -
  return (
    <>
      <div className="pro-container" >
        {products.map((item ,_id)=>{
            return (
            <div className="pro-card" key={_id}>
            <h2>{item.name}</h2>
            <img src={item.image} style={{height:"200px",width:"200px"}} />
            <Link style={{textAlign:"center"}} to={`/mobile/${item._id}`}>View more</Link>
            </div>
            )
           })}
        {/* {products.map((item , _id) => {
          return (
              <ProductCard  key={_id} name={item.name} img={item.image} desc={item.desc} p={item.price} />
          );
        })} */}
      </div>
    </>
  );
};

export default ProductDisplay;
 

// STATELESS COMPONENT => Function
// STATEFULL COMPONENT => Class