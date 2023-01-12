import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { UserContext } from '../context/user-context';

const profilePage = () => {
  const { user, logout } = useContext(UserContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <div>
      profilePage
      <button onClick={handleLogout}>登出</button>
    </div>
  );
};

export default profilePage;
