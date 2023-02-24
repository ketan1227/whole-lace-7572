import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
function AddProduct() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/tshirts')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/tshirts/${id}`)
      .then(response => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name: name,
      brand: brand,
      price: price,
      color: color,
      size: size.split(','),
      image: image
    };
    fetch('http://localhost:3000/tshirts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
    <div>
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="size">Size:</label>
        <input
          type="text"
          id="size"
          value={size}
          onChange={(event) => setSize(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
    </div>
    <div>
      <h1>Product List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          textAlign: "left",
          gap: "40px",
          padding: "50px",
          marginLeft: "60px",
          
        }}
      >
      {products.map(item => (
        <div style={{width:"250px"}}   key={item.id}>
        <img
          style={{ height: "300px" }}
          src={item.image}
          alt={item.name}
        />
        <h2>{item.brand}</h2>
        <p style={{ color: "grey", width: "250px" }}>{item.name}</p>
        <h3>Rs.{item.price}</h3>
        
     
          <p>{item.size.join(', ')}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
    </div>
    </div>
    </>
  );
}

export default AddProduct;
