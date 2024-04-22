# Learning in React

## React Context

### Introduction to Context

React Context is used for globally passing items like `isLoggedIn`, `theme`, `location`, etc.

#### Creating Context

In `app-context.js`:

```javascript
import { createContext } from "react";
const AppContext = createContext("Hello");
```

We can even pass `useState`, objects, arrays in the `createContext()`:

```javascript
<AppContext.Provider value={{ name: "Maycnk" }}>
```

#### Using Provider

After creating context in the store, we wrap the component where we want context using `<AppContext.Provider value={} >`. The `value` is very important since whatever we want in the components is given with the `value` attribute.

#### After Wrapping

For using, we use the `useContext(AppProvider)` hook.

#### `useContext()`

We use it where we want to access the variables:

```javascript
import AppContext from "./store/app-context";
function App() {
  const ctx = useContext(AppContext);
  return <div className="App">{ctx}</div>;
}
```

### Passing State in Context

1. `app-context.js` will have:

   ```javascript
   const AppContext = createContext({
     isLoggedIn: false,
     setlogin: () => {},
     setlogout: () => {},
   });
   ```

2. In `App.js`, the Context Provider will have:

   ```javascript
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
   ```

3. In `Login`, we will use `useContext()` to consume this context.

4. We will now convert the `<AppContext.Provider>` into a new component for better code readability.

   - We will make a new component as `AppProvider`:

   ```javascript
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
   ```

Certainly! Here's a README.md file to explain the usage of `useReducer` with the provided example:

---

## Using useReducer in React

### Overview

In React, `useReducer` is a Hook used for state management. It is an alternative to `useState` when the state logic is more complex and involves multiple sub-values or when the next state depends on the previous one.

This README will guide you through the usage of `useReducer` with a simple authentication example.

#### Syntax

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state`: Represents the current state managed by the reducer.
- `dispatch`: A function used to dispatch actions to the reducer.
- `reducer`: A function that specifies how the state should update in response to different actions.
- `initialState`: The initial state of the reducer.

In our example:

```javascript
const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState);
```

- `authState`: Represents the current authentication state managed by the `authReducer`.
- `dispatchAuth`: A function used to dispatch actions to the `authReducer`.
- `authReducer`: The reducer function that handles authentication state transitions.
- `initialAuthState`: The initial authentication state, where `isLoggedIn` is set to `false`.

#### Usage

1. **State Access**: You can access the current state (`authState`) to read the authentication status.

2. **Dispatching Actions**: You can dispatch actions to update the authentication state using `dispatchAuth`.

```javascript
// Dispatching an action to login
dispatchAuth({
  type: "Login",
});

// Dispatching an action to logout
dispatchAuth({
  type: "Logout",
});
```

3. **Reducer Logic**: Inside the `authReducer`, you define how the authentication state should change based on different action types. In our example, the reducer handles actions of type `"Login"` and `"Logout"`.

### Example: Authentication with useReducer

Suppose you have an authentication feature in your React application. You want to manage the authentication state (`isLoggedIn`) and provide methods to login and logout.

#### Step 1: Define the Reducer

First, define a reducer function that specifies how the state should update in response to different actions.

```javascript
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
```

#### Step 2: Define the Initial State

Define the initial state for your reducer function.

```javascript
const initialAuthState = {
  isLoggedIn: false,
};
```

#### Step 3: Create the AppProvider Component

Create a component that utilizes `useReducer` to manage the authentication state.

```javascript
import React, { useReducer } from "react";
import AppContext from "../store/app-context";

function AppProvider({ children }) {
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState);

  function setLogin() {
    dispatchAuth({
      type: "Login",
    });
  }

  function setLogout() {
    dispatchAuth({
      type: "Logout",
    });
  }

  return (
    <AppContext.Provider
      value={{ isLoggedIn: authState.isLoggedIn, setLogin, setLogout }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
```

### Conclusion

In this example, we've demonstrated how to use `useReducer` in React to manage complex state logic, such as authentication. By defining a reducer function and initial state, you can easily manage state transitions and provide actions to update the state throughout your application.

For more information on `useReducer`, refer to the [React documentation](https://reactjs.org/docs/hooks-reference.html#usereducer).

---
