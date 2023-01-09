import React, { useContext, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import CartPreview from '../CartPreview';
import { CartContext } from '../../context/cart-context';
const Navbar = () => {
  const cart = useContext(CartContext).cart;
  const totalQty = cart.reduce((accu, item) => accu + item.quantity, 0);

  const [showCart, setShowCart] = useState(false);
  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <nav className="w-full h-[10vh] bg-gray-500 sticky top-0 flex justify-between items-center px-10 z-50">
      <h4 className="text-white">
        <Link href="/">Store</Link>
      </h4>
      <div className="flex gap-x-10">
        <Link
          href="/cart"
          onMouseEnter={openCart}
          onMouseLeave={closeCart}
          className="bg-pink-300 rounded-xl p-2 w-32 justify-center flex gap-x-5"
        >
          <span>Cart</span>
          <span className="bg-white rounded-full inline-block w-7 text-center">
            {totalQty}
          </span>
        </Link>
        <button className="text-white">
          <FaUserCircle size={25} />
        </button>
      </div>
      <div
        onMouseEnter={openCart}
        onMouseLeave={closeCart}
        className={`absolute right-10 top-full duration-1000 overflow-hidden ${
          showCart ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <CartPreview />
      </div>
    </nav>
  );
};

export default Navbar;
