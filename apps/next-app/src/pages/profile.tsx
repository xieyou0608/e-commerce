import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user-context';
import { OrderType } from '../interface';

const profilePage = () => {
  const { user, logout } = useContext(UserContext);
  const [orderList, setOrderList] = useState<OrderType[]>([]);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('user');
    router.push('/');
  };

  useEffect(() => {
    const getOrderData = async () => {
      const res = await fetch(
        `https://e-commerce-bdf1f-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${user.userId}.json?auth=${user.idToken}`
      );
      const data = await res.json();
      if (res.status === 200) {
        if (data) {
          const transformedData = Object.keys(data).map((key) => ({
            ...data[key],
            date: new Date(data[key].date),
            id: key,
          }));
          setOrderList(transformedData);
        }
      }
    };
    if (user) {
      getOrderData();
    }
  }, []);

  return (
    <div className="flex justify-center">
      <main className="border border-gray-400 rounded-xl p-3">
        <div className="flex flex-col">
          <div className="text-right">
            <button
              onClick={handleLogout}
              className="bg-gray-200 p-2 rounded-lg"
            >
              登出
            </button>
          </div>
          <ul>
            <li>信箱: {user?.email}</li>
          </ul>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <td className="px-6 py-4">訂單編號</td>
                <td className="px-6 py-4">訂單日期</td>
                <td className="px-6 py-4">訂單狀態</td>
                <td className="px-6 py-4">訂單內容</td>
              </tr>
            </thead>
            <tbody>
              {orderList.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center">
                    目前尚無訂單
                  </td>
                </tr>
              )}
              {orderList &&
                orderList.map((order) => (
                  <tr
                    key={order.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{order.id}</td>
                    <td className="px-6 py-4">{order.date.toLocaleString()}</td>
                    <td className="px-6 py-4">{order.status}</td>
                    <td className="px-6 py-4">
                      {order.products.map((item) => (
                        <p key={item.product.id}>
                          {item.product.title} * {item.quantity} 件
                        </p>
                      ))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default profilePage;
