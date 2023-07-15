import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemExists = cart.some((cartItem) => cartItem.id === item.id);
  if (itemExists) {
    return; // Éviter l'ajout de l'élément
  }
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };
  const calculateTotal = () => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);
    return total;
  };
  const getCartItemCount = () => {
    return cart.length;
  };
  const getItemTotalPrice = (item) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      return itemInCart.price * itemInCart.quantity;
    }
    return 0;
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    calculateTotal,
    getCartItemCount,
    getItemTotalPrice
  };


  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
