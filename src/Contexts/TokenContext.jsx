import React, { createContext, useState } from "react";

// Create a context specifically for Auth token / login status
const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
