

import { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm.jsx";
import "./App.css"

function App() {
        // Initializing products as a state variable
        const [products, setProducts] = useState([
            { id: 1, name: "Hydrating Serum", price: 30, description: "Enriched with Hyaluronic Acid for deep moisturization and improved skin hydration." },
            { id: 2, name: "Clarifying Toner", price: 28, description: "Contains Salicylic Acid to exfoliate the skin, clear pores, and reduce acne." },
            { id: 3, name: "Anti-Aging Moisturizer", price: 35, description: "Formulated with Retinol to promote skin renewal and reduce signs of aging." }
        ]);
    

        const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

        function handleInputChange(event) {
          const { name, value } = event.target;
          setNewProduct(prev => ({ ...prev, [name]: value }));
        }
      
        function addProduct() {
          if (newProduct.name && newProduct.price && newProduct.description) {
            setProducts([...products, { ...newProduct, id: products.length + 1 }]);
            setNewProduct({ name: '', price: '', description: '' }); // Reset the form
          }
        }
      
        return (
            <div className="app">
            <header>
              <h1>Skincare Products Dashboard</h1>
            </header>
            <div className="product-container">
              {products.map(product => (
                <div key={product.id} className="product-box">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p className="price">Price: ${product.price}</p>
                </div>

))}
</div>
<div className="add-product-form">
  <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} />
  <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
  <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange}></textarea>
  <button onClick={addProduct}>Add Product</button>
</div>
</div>
);
}

   export default App;

    
    
    
    
    
    
    
    