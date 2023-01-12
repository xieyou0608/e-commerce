import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const registerPage = () => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const signup = async (formData) => {
    console.log(formData);
    const { email, password } = formData;
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdx9AyFuSrjvKb1LIbD94O8tyRG93SC8I',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );
    const data = await res.json();

    if (res.status === 200) {
      window.alert('註冊成功');
      router.push('/login');
    } else {
      setErrorMessage(data.error.message);
    }
  };
  return (
    <main className="flex justify-center">
      <form onSubmit={handleSubmit(signup)}>
        <div className="flex flex-col bg-gray-200  p-8 gap-y-3 rounded-xl">
          <h4 className="text-center">註冊</h4>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          <input
            {...register('email')}
            placeholder="信箱"
            type="text"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            {...register('password')}
            placeholder="密碼"
            type="password"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {/* <input
            {...register('username')}
            placeholder="姓名"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            {...register('phone')}
            placeholder="手機號碼"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /> */}

          <button className="w-full h-10 rounded-lg text-white bg-teal-700 ">
            註冊
          </button>
          <Link href="/login" className="text-blue-500 text-center">
            點我去登入
          </Link>
        </div>
      </form>
    </main>
  );
};

export default registerPage;
