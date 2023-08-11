import PropTypes from "prop-types";
import { useState } from "react";
import "./normalize.css";
import "./style.css";
import House from "./assets/home.svg";
import Dollar from "./assets/dollar.svg";

function Nav() {
  return (
    <nav>
      <h2>Commander Nilpfred</h2>
      <a href="https://nilpfred.de">
        <img
          src={House}
          alt="Homepage icon"
          width="48px"
          className="home-icon"
        />
      </a>
      <a href="https://stereola.bandcamp.com/">
        <img
          src={Dollar}
          alt="Dollar icon"
          width="48px"
          className="shop-icon"
        />
      </a>
    </nav>
  );
}

export default Nav;
