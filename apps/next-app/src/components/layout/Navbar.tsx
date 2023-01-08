import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] bg-gray-500 sticky flex  justify-between items-center px-5">
      <h2 className="text-white">Store</h2>
      <div className="flex gap-x-10">
        <button className="bg-pink-300 rounded-xl p-2 w-32 justify-center flex gap-x-5">
          <span>Cart</span>
          <span className="bg-white rounded-full inline-block w-7 text-center">
            0
          </span>
        </button>
        <button className="text-white">會員</button>
      </div>
    </nav>
  );
};

export default Navbar;
