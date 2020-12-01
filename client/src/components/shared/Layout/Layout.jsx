import React from "react";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
