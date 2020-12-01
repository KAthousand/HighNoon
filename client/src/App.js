import "./App.css";
import { Route } from "react-router-dom";
import Login from "./screens/Login/Login";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Login />
      </Route>
    </div>
  );
}

export default App;
