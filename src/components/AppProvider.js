import React, { useState } from "react";
import AppContext from "../store/app-context";

function AppProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function setlogin() {
    setIsLoggedIn(true);
  }
  function setlogout() {
    setIsLoggedIn(false);
  }
  return (
    <AppContext.Provider value={{ isLoggedIn, setlogin, setlogout }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
