import React, { useContext } from 'react';
import UserContext from './context/UserContext';

export const LoginPage = () => {
  const { user, setUserFun } = useContext(UserContext);
  
  console.log(user);
  return (
    <>
      <h2>Login Page</h2>
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className='btn btn-primary' onClick={setUserFun}>Establecer Usuario</button>
    </>
  );
};
