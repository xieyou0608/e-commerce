import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] bg-gray-500 sticky flex  justify-between items-center px-10">
      <h4 className="text-white">
        <Link href="/">Store</Link>
      </h4>
      <div className="flex gap-x-10">
        <button className="bg-pink-300 rounded-xl p-2 w-32 justify-center flex gap-x-5">
          <span>Cart</span>
          <span className="bg-white rounded-full inline-block w-7 text-center">
            0
          </span>
        </button>
        <button className="text-white">
          <FaUserCircle size={25} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
