import React, { useState } from "react";

const CartLogic = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item._id === product._id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === existingProduct._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item._id !== productId));
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      {children({
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      })}
    </div>
  );
};

export default CartLogic;