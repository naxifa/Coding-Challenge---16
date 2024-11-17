// Creating the AddProductForm Component

import React, { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct({ name, price, description });
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;