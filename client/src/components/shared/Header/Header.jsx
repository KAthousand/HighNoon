import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="header">
      <div className="header-logo"></div>
      {currentUser ? (
        <div className="header-user-info">
          <p>{currentUser.username}</p>
          <button onClick={handleLogout} className="scoreboard-button">
            Logout
          </button>
        </div>
      ) : (
        <Link to="login">Login</Link>
      )}
    </div>
  );
}

export default Header;
