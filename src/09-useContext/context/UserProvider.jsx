import React, { useState } from 'react';
import UserContext from './UserContext';

export const UserProvider = ({ children }) => {
  const userBase = {
    id: 123, 
    FirstName: 'Andres Martin',
    LastName: 'Garcia Amado',
    mail: 'andres.garciaamado@gmail.com'
  }
  const [user, setUser] = useState(userBase);
  const setUserFun = () => {
    setUser({...userBase, FirstName: 'Pepito'})
  }
  return (
    <UserContext.Provider value={{ hola: 'mundo', user, setUserFun }}>
      {children}
    </UserContext.Provider>
  );
};
