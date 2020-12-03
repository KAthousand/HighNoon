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
import { getAllScores } from "../src/services/scores";
import MainMenu from "./screens/MainMenu/MainMenu";
import Instructions from "./screens/Instructions/Instructions";
import ScoresContainer from "../src/containers/ScoresContainer/ScoresContainer";
import Game from "./screens/Game/Game";
import PlayerScoreCard from "../src/screens/PlayerScoreCard/PlayerScoreCard";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [allScores, setAllScores] = useState([]);
  const [wordCount, setWordCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [keyStrokes, setKeyStrokes] = useState([]);
  // const [fake, setFake] = useState(true);
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
    fetchScores();
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

  const fetchScores = async () => {
    const scores = await getAllScores();
    setAllScores(scores);
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
            <ScoresContainer
              currentUser={currentUser}
              allScores={allScores}
              setAllScores={setAllScores}
            />
          </Route>
          <Route path="/game">
            <Game
              wordCount={wordCount}
              setWordCount={setWordCount}
              setKeyStrokes={setKeyStrokes}
              errorCount={errorCount}
              setErrorCount={setErrorCount}
            />
          </Route>
          <Route path="/score-card">
            <PlayerScoreCard
              setAllScores={setAllScores}
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
