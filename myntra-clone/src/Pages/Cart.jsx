import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Cart.css';
import Footer from './Footer';
function Cart() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const quantity = 1;

  const updateCart = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const deleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <div className="cart-container"  style={{marginBottom:"100px"}}  >
      <h1>Cart</h1>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.brand} - {item.name}</h3>
              <p className="cart-item-price">Price: {item.price}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              <div className="cart-item-actions">
                <button disabled={item.quantity === 1} className="cart-item-action" onClick={() => updateCart(index, item.quantity - 1)}>-</button>
                <button className="cart-item-action" onClick={() => updateCart(index, item.quantity + 1)}>+</button>
                <button className="cart-item-action" onClick={() => deleteItem(index)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p className="cart-total-quantity">Total Quantity: {totalQuantity}</p>
        <p className="cart-total-price">Total Price: {totalPrice}</p>
        <Link to="/address"><button className="cart-checkout-button">Checkout</button></Link>
      </div>
      
    </div>
    <Footer />
    </>
  );
}

export default Cart;
