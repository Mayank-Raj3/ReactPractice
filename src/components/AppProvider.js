import React, { useReducer } from "react";
import AppContext from "../store/app-context";

function authReducer(state, action) {
  if (action.type === "Login") {
    return {
      isLoggedIn: true,
    };
  } else if (action.type === "Logout") {
    return {
      isLoggedIn: false,
    };
  } else {
    return state;
  }
}
const intitialAuthState = {
  isLoggedIn: false,
};

function AppProvider({ children }) {
  /*
  Using useState
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  function setlogin() {
    setIsLoggedIn(true);
  }
  function setlogout() {
    setIsLoggedIn(false);
  }
  */

  const [authState, dispatchAuth] = useReducer(authReducer, intitialAuthState);
  function setlogin() {
    dispatchAuth({
      type: "Login",
    });
  }
  function setlogout() {
    dispatchAuth({
      type: "Logout",
    });
  }

  return (
    <AppContext.Provider
      value={{ isLoggedIn: authState.isLoggedIn, setlogin, setlogout }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
