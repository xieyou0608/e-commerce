import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { CartContext } from '../context/cart-context';
import { UserContext } from '../context/user-context';

const checkoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const user = useContext(UserContext).user;
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const submitForm = async (formObj, e) => {
    e.preventDefault();
    console.log(formObj);

    const orderBody = {
      username: formObj.username,
      phone: formObj.phone,
      store: formObj.store,
      products: cart,
      status: '待出貨',
      date: new Date().toString(),
    };

    const res = await fetch(
      `https://e-commerce-bdf1f-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${user.userId}.json?auth=${user.idToken}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(orderBody),
      }
    );
    const data = await res.json();
    if (res.status === 200) {
      console.log(data);
      clearCart();
      window.alert('下訂成功');
      router.push('/profile');
    } else {
      console.log(data);
      window.alert('發生錯誤，請重新嘗試');
    }
  };

  return (
    <div className="flex justify-center">
      <main className="rounded-xl border-gray-500 border p-10">
        <h4>填寫訂單資料</h4>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col [&_div]:my-3 [&_label]:mr-3 [&_input]:border-gray-300 [&_input]:border">
            <div>
              <label htmlFor={'username'}>取貨姓名</label>
              <input type="text" {...register('username')} />
            </div>
            <div>
              <label htmlFor={'phone'}>手機號碼</label>
              <input type="text" {...register('phone')} />
            </div>
            {/* <div>
              <label htmlFor={'email'}>信箱</label>
              <input
                type="text"
                {...register('email')}
                defaultValue={user.email}
              />
            </div> */}

            <div>
              <label htmlFor={'store'}>取貨門市</label>
              <input type="text" {...register('store')} />
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
