import React, { createContext, useState, useContext } from "react";

// Creamos el contexto de autenticación
export const AuthContext = createContext();

// Creamos un proveedor de contexto para gestionar el estado de autenticación
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContextProvider value={{ user, setUser }}>
      {children}
    </AuthContextProvider>
  );
};

// Un hook personalizado para acceder al contexto de autenticación
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};
