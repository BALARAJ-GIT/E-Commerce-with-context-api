import React, { createContext, useState } from "react";

export const MyStore = createContext();

const MyContext = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increment Quantity
  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrement Quantity
  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <MyStore.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        toggleCart,
        addToCart,
        incrementQuantity,
        decrementQuantity
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default MyContext;