import Login from "./components/Login";
import AppProvider from "./components/AppProvider";

function App() {
  return (
    <AppProvider>
      <Login></Login>
    </AppProvider>
  );
}

export default App;
