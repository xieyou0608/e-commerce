import React, { useState } from 'react';
import { CartType, ProductType } from '../interface';

type CartContextType = {
  cart: CartType;
  addToCart: (product: ProductType, quantity: number) => void;
  removeFromCart: (product: ProductType) => void;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  setCart: () => {},
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
        updatedCart.push({ product, quantity: 1 });
      }
      return updatedCart;
    });
  };

  // 只有已存在 cart 裡的項目才提供這個功能
  const removeFromCart = (product: ProductType) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const existedPid = prev.findIndex((p) => p.product.id === product.id);
      if (updatedCart[existedPid].quantity === 1) {
        if (window.confirm('確定要移除這個商品嗎?')) {
          return updatedCart.filter((item) => item.product.id !== product.id);
        }
      } else {
        updatedCart[existedPid].quantity -= 1;
        return updatedCart;
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
