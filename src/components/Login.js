import React from "react";
import AppContext from "../store/app-context";
import { useContext } from "react";

function Login() {
  const ctx = useContext(AppContext);
  console.log(ctx);
  return (
    <div>
      {ctx.isLoggedIn ? (
        "Welcome"
      ) : (
        <button onClick={ctx.setlogin}>Login</button>
      )}
      {ctx.isLoggedIn && <button onClick={ctx.setlogout}>LogOut</button>}
      {!ctx.isLoggedIn && "Please LogIn"}
    </div>
  );
}

export default Login;
