import React from "react";
// import Layout from "../../components/shared/Layout/Layout";
import { Link } from "react-router-dom";
import "../MainMenu/MainMenu.css";

function MainMenu(props) {
  const { currentUser } = props;
  return (
    <div className="container">
      <div className="logo">
        <h1>High Noon</h1>
      </div>
      {currentUser ? (
        <div className="button-container">
          <Link to="/instructions">
            <button>New Game</button>
          </Link>
          <Link to="/scores">
            <button>High Scores</button>
          </Link>
        </div>
      ) : (
        <div className="button-container">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MainMenu;
