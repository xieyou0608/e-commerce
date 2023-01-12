import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/user-context';

const loginPage = () => {
  const { register, handleSubmit } = useForm();
  const login = useContext(UserContext).login;
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (formData) => {
    console.log(formData);
    const { email, password } = formData;
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdx9AyFuSrjvKb1LIbD94O8tyRG93SC8I',
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
    const userData = {
      idToken: data.idToken,
      email: data.email,
      userId: data.localId,
    };

    if (res.status === 200) {
      login(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      window.alert('登入成功');
      router.push('/products');
    } else {
      setErrorMessage(data.error.message);
    }
  };

  return (
    <main className="flex justify-center">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="flex flex-col bg-gray-200  p-8 gap-y-3 rounded-xl">
          <h4 className="text-center">登入</h4>
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
          <button className="w-full h-10 rounded-lg text-white bg-teal-700 ">
            登入
          </button>
          <Link href="/register" className="text-blue-500 text-center">
            點我去註冊
          </Link>
        </div>
      </form>
    </main>
  );
};

export default loginPage;
