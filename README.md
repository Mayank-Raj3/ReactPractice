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

For more information on `useReducer`, refer to the [React documentation](https://reactjs.org/docs/hooks-reference.html#usereducer).

---

## useEffect Hook Example

In this example, we are utilizing the `useEffect` hook in a React component to perform asynchronous operations and handle cleanup tasks. Let's break down the code step by step:

### Purpose:

The primary purpose of this code is to monitor changes in the `email` and `password` fields of a form, and perform validation after a certain delay. Additionally, it ensures that a cleanup function is executed when the component unmounts or when the dependencies (`email` and `password`) change.

#### `useEffect` Hook:

```javascript
useEffect(() => {
  const timeoutId = setTimeout(() => {
    console.log("Checking if form is valid");
    setIsFormValid(email.trim().length > 5 && password.trim().length > 5);
  }, 500);

  return () => {
    console.log("CLEANUP");
    clearTimeout(timeoutId);
  };
}, [email, password]);
```

- This `useEffect` hook is called every time the `email` or `password` fields change.
- Inside the hook, a timeout function is set using `setTimeout`. This function executes after 500 milliseconds.
- Within the timeout function, the validity of the form is checked based on the length of the `email` and `password` fields. If both have a length greater than 5 (trimmed to remove whitespace), `isFormValid` is set to `true`, otherwise `false`.
- The `return` statement defines a cleanup function, which clears the timeout when the component unmounts or when `email` or `password` change.

### Conclusion:

The `useEffect` hook is a powerful tool in React for managing side effects in functional components.

---

### 1. Fetch

#### Overview

Fetch is a modern interface for fetching resources over the network. It is a native JavaScript API that provides a more powerful and flexible way to make HTTP requests compared to traditional XMLHttpRequest.

#### Features

- Simple and intuitive API
- Supports all modern browsers
- Allows handling of request and response bodies in various formats
- Provides built-in support for promises, making it easier to work with asynchronous code

#### Installation

```bash
npm install whatwg-fetch --save
```

#### Usage (with Async/Await)

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData("https://api.example.com/data");
```

#### Usage (Without Async/Await)

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### Documentation

For detailed documentation and examples, please refer to the [Fetch API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

---

### 2. Axios

#### Overview

Axios is a popular Promise-based HTTP client for the browser and Node.js. It provides an easy-to-use API for making HTTP requests and handling responses.

#### Features

- Supports modern browsers and Node.js
- Simple API for making HTTP requests
- Interceptors for request and response handling
- Automatic transformation of JSON data
- Promise-based API for handling asynchronous operations

#### Installation

```bash
npm install axios --save
```

#### Usage (with Async/Await)

```javascript
const axios = require("axios");

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData("https://api.example.com/data");
```

#### Usage (Without Async/Await)

```javascript
const axios = require("axios");

axios
  .get("https://api.example.com/data")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error));
```

#### Documentation

For detailed documentation and examples, please refer to the [Axios documentation](https://axios-http.com/docs/intro).

---

### 3. Promise

#### Overview

Promises are a feature of JavaScript that provides a way to handle asynchronous operations. They represent a value that may be available now, or in the future, or never.

#### Features

- Simplifies asynchronous programming
- Provides a clean and intuitive syntax
- Allows chaining of multiple asynchronous operations
- Supports error handling with catch method
- Compatible with modern JavaScript features like async/await

#### Usage (with Async/Await)

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function exampleAsyncFunction() {
  try {
    await delay(1000);
    console.log("Async operation completed successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

exampleAsyncFunction();
```

#### Usage (Without Async/Await)

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    resolve("Operation completed successfully");
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### Documentation

For detailed documentation and examples, please refer to the [MDN Web Docs on Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

---
