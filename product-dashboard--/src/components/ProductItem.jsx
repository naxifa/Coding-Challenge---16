
// Creating the ProductItem component

import React from "react";

function ProductItem({ product }) {
  return (
    <div>

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p>Price: ${product.price}</p>
      
    </div>
  );
}

export default ProductItem;

