import PropTypes from "prop-types";
import { useState } from "react";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./normalize.css";
import "./style.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
