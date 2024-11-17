// Creating the ProductList Component

import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div>
      {products.map(product => <ProductItem key={product.id} product={product} />)}
    </div>
  );
}

export default ProductList;

