import React from "react";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";

function Products() {
  return (
      <div>
        {ProductList.map((e, id) => {
          return (
            <ProductItem
              key={id}
              id={e._id}
              name={e.name}
              image={e.image}
            />
          );
        })}
      </div>
  );
}

export default Products;