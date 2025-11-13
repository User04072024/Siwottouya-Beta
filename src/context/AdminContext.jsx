import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const login = (password) => {
    // ESTA ES UNA CONTRASEÑA DE EJEMPLO. ¡NO USAR EN PRODUCCIÓN!
    if (password === 'admin') {
      setIsAdmin(true);
      setIsLoginOpen(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout, isLoginOpen, openLogin, closeLogin }}>
      {children}
    </AdminContext.Provider>
  );
};