import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../src/components/shared/Layout/Layout";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import MainMenu from "./screens/MainMenu/MainMenu";
import Instructions from "./screens/Instructions/Instructions";
import ScoresContainer from "../src/containers/ScoresContainer/ScoresContainer";
import Game from "./screens/Game/Game";
import PlayerScoreCard from "../src/screens/PlayerScoreCard/PlayerScoreCard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [keyStrokes, setKeyStrokes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push("/");
      }
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route exact path="/">
            <MainMenu currentUser={currentUser} />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/scores">
            <ScoresContainer currentUser={currentUser} />
          </Route>
          <Route path="/game">
            <Game
              wordCount={wordCount}
              setWordCount={setWordCount}
              keyStrokes={keyStrokes}
              setKeyStrokes={setKeyStrokes}
              errorCount={errorCount}
              setErrorCount={setErrorCount}
            />
          </Route>
          <Route path="/score-card">
            <PlayerScoreCard
              wordCount={wordCount}
              setWordCount={setWordCount}
              keyStrokes={keyStrokes}
              setKeyStrokes={setKeyStrokes}
              errorCount={errorCount}
              setErrorCount={setErrorCount}
            />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
