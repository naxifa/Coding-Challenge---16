
//Create the App Component

import React from "react"
import ProductList from "./ProductList"
import AddProductForm from "./AddProductForm"

// Creating a default list of products as an array of objects

function App () {

const products = [
    {id: 1, name: "Hydrating Serum", price: 30, description: "Enriched with Hyaluronic Acid for deep moisturization and improved skin hydration." },
      { id: 2, name: "Clarifying Toner", price: 28, description: "Contains Salicylic Acid to exfoliate the skin, clear pores, and reduce acne." },
      { id: 3, name: "Anti-Aging Moisturizer", price: 35, description: "Formulated with Retinol to promote skin renewal and reduce signs of aging." }
];

return (
    <div className="App">
         <h1>Skincare Products Dashboard</h1>
         <ProductList products={products} /> 
         <AddProductForm />

     </div>
);
}

export default App;
