import { createContext, useContext, useState } from 'react';

export const CartContext = createContext([]);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const increaseQuantity = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity++;
      return newCart;
    });
  };

  const decreaseQuantity = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity--;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
