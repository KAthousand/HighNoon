import React from "react";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout(props) {
  const { outlaw, gameStart, countdownTrigger } = props;

  return (
    <div className="layout">
      {props.currentUser && (
        <Header
          currentUser={props.currentUser}
          handleLogout={props.handleLogout}
        />
      )}
      <div
        className={
          props.currentUser ? "layout-children-add-header" : "layout-children"
        }
      >
        <div className="layout-background">{props.children}</div>
        <div className="building"></div>
        <div
          className={
            countdownTrigger ? "dramatic-top drama-transition" : "dramatic-top"
          }
        ></div>
        {gameStart && (
          <div className="fixed-position">
            <div
              className={
                outlaw
                  ? "outlaw-container one-transition"
                  : "outlaw-container-two two-transition"
              }
            ></div>
          </div>
        )}
        <div
          className={
            countdownTrigger
              ? "dramatic-bottom drama-transition"
              : "dramatic-bottom"
          }
        ></div>
      </div>
    </div>
  );
}

export default Layout;
