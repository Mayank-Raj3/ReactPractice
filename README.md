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
