import React, { useState } from 'react';
import { CartType, ProductType } from '../interface';

type CartContextType = {
  cart: CartType;
  addToCart: (product: ProductType, quantity: number) => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
});

const CartProvider = (props) => {
  const [cart, setCart] = useState<CartType>([]);

  const addToCart = (product: ProductType, quantity: number) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const existedPID = prev.findIndex((p) => p.product.id === product.id);
      if (existedPID !== -1) {
        updatedCart[existedPID].quantity += quantity;
      } else {
        updatedCart.push({ product, quantity: 0 });
      }
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart: cart, addToCart: addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
