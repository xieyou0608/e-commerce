import React, { useContext, useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import CartPreview from '../cart/CartPreview';
import { CartContext } from '../../context/cart-context';
import { UserContext } from '../../context/user-context';
const Navbar = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user, login } = useContext(UserContext);
  const totalQty = cart.reduce((accu, item) => accu + item.quantity, 0);

  const [showCart, setShowCart] = useState(false);
  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };

  // localStorage 不能在 context 用，因為 Next.js SSR
  // useContext 不能再 _app.js 用，因為要在 provider 底下才能用 context
  // 先放在 navbar 來處理雙向綁定，讓網頁重整之後 cart 不會清空
  useEffect(() => {
    const tempCart = JSON.parse(localStorage.getItem('cart'));
    if (tempCart && tempCart.length > 0) {
      setCart(tempCart);
    }
    const tempUser = JSON.parse(localStorage.getItem('user'));
    console.log(tempUser);
    if (tempUser) {
      login(tempUser);
    }
  }, []);

  useEffect(() => {
    if (cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <nav className="w-full h-[10vh] bg-gray-500 sticky top-0 flex justify-between items-center px-10 z-50">
      <h4 className="text-white">
        <Link href="/">Store</Link>
      </h4>
      <div className="flex gap-x-10 items-center">
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
        <Link href={user ? '/profile' : '/login'} className="text-white">
          <FaUserCircle size={25} />
        </Link>
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
