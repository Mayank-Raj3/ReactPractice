import React from "react";
import AppContext from "../store/app-context";
import { useContext } from "react";

function Login() {
  const ctx = useContext(AppContext);
  console.log(ctx);
  return (
    <div>
      {!ctx.isLoggedIn && <h1>Please Login</h1>}
      <div>
        {ctx.isLoggedIn ? (
          <h1>Welcome</h1>
        ) : (
          <div>
            <button onClick={ctx.setlogin}>Login</button>
          </div>
        )}
        {ctx.isLoggedIn && <button onClick={ctx.setlogout}>Logout</button>}
      </div>
    </div>
  );
}

export default Login;
