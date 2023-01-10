import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { CartContext } from '../context/cart-context';

const checkoutPage = () => {
  const clearCart = useContext(CartContext).clearCart;
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const username = 'username';
  const phone = 'phone';
  const email = 'email';
  const address = 'address';
  const store = 'store';
  const submitForm = (formObj, e) => {
    e.preventDefault();
    console.log(formObj);

    clearCart();
    window.alert('下訂成功');
    router.push('/');
  };

  return (
    <div className="flex justify-center">
      <main className="rounded-xl border-gray-500 border p-10">
        <h4>填寫訂單資料</h4>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col [&_div]:my-3 [&_label]:mr-3 [&_input]:border-gray-300 [&_input]:border">
            <div>
              <label htmlFor={username}>取貨姓名</label>
              <input type="text" {...register(username)} />
            </div>
            <div>
              <label htmlFor={phone}>手機號碼</label>
              <input type="text" {...register(phone)} />
            </div>
            <div>
              <label htmlFor={email}>信箱</label>
              <input type="text" {...register(email)} />
            </div>
            <div>
              <label htmlFor={address}>地址</label>
              <input {...register(address)} />
            </div>
            <div>
              <label htmlFor={store}>取貨門市</label>
              <input type="text" {...register(store)} />
            </div>
          </div>
          <footer className="flex justify-end p-2">
            <button className="px-2 py-2 border border-rose-600 bg-rose-600 rounded-sm text-center text-white text-sm">
              確定送出
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default checkoutPage;
