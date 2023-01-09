import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import Link from 'next/link';

const Cart = () => {
  const cart = useContext(CartContext).cart;
  return (
    <div className="bg-white p-3">
      <table className="border-separate border-spacing-x-2 text-sm">
        <thead>
          <tr>
            <td>商品名稱</td>
            <td>商品數量</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.product.id} className="z-50">
              <td>{item.product.title}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="flex justify-end pr-3 mt-2">
        <Link
          href="/cart"
          className="px-2 py-1 border border-rose-600 bg-rose-600 rounded-sm text-white text-sm"
        >
          前往結帳
        </Link>
      </footer>
    </div>
  );
};

export default Cart;
