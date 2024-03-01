import React from 'react'

const ProductCall = React.memo(({name,addCart}) => {
    console.log( name + " Product Rerender");
  return (
    <>
    <div>
        <h1>{name}</h1>
        <button onClick={addCart}>Add Product</button>
    </div>
    </>
  )
})

export default ProductCall

// class pure component