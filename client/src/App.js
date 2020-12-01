import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState } from "react";
import Layout from "../src/components/shared/Layout/Layout";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import { loginUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">{/* container */}</Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
