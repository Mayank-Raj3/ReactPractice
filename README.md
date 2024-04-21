# Learning in reacts

## React Context

### Intro To Context

    - Used for global passing items like isloggedin , theme , location etc
    - src > store > app-context.js

    1.Creating Context
      - in app-contex.js
          import {createContext} from "react"
          const AppContext = createContext("Hello");

      - We can even pass useState , objects array in the createContext()
        <AppContext.Provider value={{ name: "Maycnk" }}>

    2.Using Provider
      - After creating contex in the store we wrap the component where we want context using <AppContext.Provider value={} >
      - value is very impo since whatever we want in the components is given with value attribute

    3.After Wraping for using we use **useContext(AppProvider)** hook

    4.useContext()
        - We use it where we want to acces the variables
            import AppContext from "./store/app-context";
            function App() {
                const ctx = useContext(AppContext);
                return <div className="App">{ctx}</div>;
            }

### Passing State in context

1. app-context.js will have
   const AppContext = createContext({
   isLoggedIn: false,
   setlogin: () => {},
   setlogout: () => {},
   });
2. In app.js Context Provider.js will have

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

3. In Login We will have useContext() to consume this context
