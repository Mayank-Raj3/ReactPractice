import { createContext } from "react";

//  This gives the representation of data
const AppContext = createContext({
  isLoggedIn: false,
  setlogin: () => {},
  setlogout: () => {},
});

export default AppContext;
