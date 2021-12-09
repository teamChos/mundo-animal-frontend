import React, { useReducer } from 'react';
import { AppRouter } from './routes/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => ({
  checking: true
  /* return JSON.parse(localStorage.getItem('token')) || { logged: false }; */
});

export const MundoAnimalApp = () => {

  const [state, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <AppRouter />
    </AuthContext.Provider>
  );
};