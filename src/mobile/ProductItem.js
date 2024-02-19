import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({name , image , id}) {
  const navigate = useNavigate();
  return (
    <div
        style={{cursor:"pointer"}}
        onClick={() => {
        navigate("/products/" + id);
      }}
    >
      <img src={image} height={100} width={100} />
      <h3> {name} </h3>
    </div>
  );
}

export default ProductItem;

