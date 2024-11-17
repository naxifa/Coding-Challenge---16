//Create the App Component

import React, { useState } from 'react'; // Make sure to import useState
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
    // Initializing products as a state variable
    const [products, setProducts] = useState([
        { id: 1, name: "Hydrating Serum", price: 30, description: "Enriched with Hyaluronic Acid for deep moisturization and improved skin hydration." },
        { id: 2, name: "Clarifying Toner", price: 28, description: "Contains Salicylic Acid to exfoliate the skin, clear pores, and reduce acne." },
        { id: 3, name: "Anti-Aging Moisturizer", price: 35, description: "Formulated with Retinol to promote skin renewal and reduce signs of aging." }
    ]);

    // Function to add a new product
    const addProduct = (newProduct) => {
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    };

    return (
        <div className="App">
            <h1>Skincare Products Dashboard</h1>
            <ProductList products={products} />
            <AddProductForm onAddProduct={addProduct} />
        </div>
    );
}

export default App;
