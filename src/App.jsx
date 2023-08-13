import PropTypes from "prop-types";
import { useState } from "react";
import Nav from "./Nav.jsx";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./normalize.css";
import "./style.css";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
