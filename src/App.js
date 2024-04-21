import AppContext from "./store/app-context";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function setlogin() {
    setIsLoggedIn(true);
  }
  function setlogout() {
    setIsLoggedIn(false);
  }
  return (
    <AppContext.Provider value={{ isLoggedIn, setlogin, setlogout }}>
      <Login></Login>
    </AppContext.Provider>
  );
}

export default App;
