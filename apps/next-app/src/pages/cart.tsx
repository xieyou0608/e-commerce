import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../context/cart-context';
import CartRow from '../components/cart/CartRow';
import { UserContext } from '../context/user-context';
const cartPage = () => {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const totalPrice = cart
    .reduce((accu, item) => accu + item.product.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    if (user) {
      router.push('/checkout');
    } else {
      window.alert('請先登入');
      router.push('/login');
    }
  };

  return (
    <div className="flex justify-center py-10">
      <main className="flex flex-col items-center w-80[vw] lg:w-[70vw] ">
        <table className="text-sm w-full">
          <thead>
            <tr>
              <td className="text-center">商品照片</td>
              <td>商品名稱</td>
              <td>商品數量</td>
              <td>總價格</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartRow key={item.product.id} item={item} />
            ))}
          </tbody>
        </table>
        <footer className="w-full flex justify-end pr-3 mt-2">
          <div className="flex flex-col gap-y-3">
            <h5 className="text-rose-600">小計 $ {totalPrice}</h5>
            <button
              onClick={handleCheckout}
              className="px-2 py-2 border border-rose-600 bg-rose-600 rounded-sm text-center text-white text-sm"
            >
              前往結帳
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default cartPage;
