import React from "react";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout(props) {
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
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
