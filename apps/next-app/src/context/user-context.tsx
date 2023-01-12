import React, { useState } from 'react';
import { UserType } from '../interface';

type UserContextType = {
  user: UserType | null;
  login: (userData: UserType) => void;
  logout: () => void;
};

export const UserContext = React.createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

const UserProvider = (props) => {
  const [user, setUser] = useState<UserType>(null);

  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
