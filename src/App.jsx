import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Nav from "./Components/Nav.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import "./styles/normalize.css";
import "./styles/style.css";

function App() {
  const [refHero, inViewHero] = useInView({
    threshold: 0,
    delay: 0,
  });

  return (
    <>
      <Nav inViewHero={inViewHero} />
      <Outlet ref={refHero} />
      <Footer />
    </>
  );
}

export default App;
