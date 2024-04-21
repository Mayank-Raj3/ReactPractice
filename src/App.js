import { useContext } from "react";
import AppContext from "./store/app-context";

function App() {
  const ctx = useContext(AppContext);

  return <div className="App">{ctx.name}</div>;
}

export default App;
