import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initialState = { logged: false };
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ level, children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {
    const payload = {
      id: 'ABC',
      name: name,
    }; 
    const action = {
      type: types.login,
      payload: payload,
    };
    localStorage.setItem('user', JSON.stringify(payload))
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type: types.logout
    };
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
