import React, { createContext, useState } from "react";

// Create a context specifically for Login UI toggle state
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(true);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
