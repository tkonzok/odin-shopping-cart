import { Link } from "react-router-dom";
import "../styles/normalize.css";
import "../styles/style.css";
import House from "../assets/Icons/home.svg";
import HouseWhite from "../assets/Icons/home_white.svg";
import Dollar from "../assets/Icons/dollar.svg";
import DollarWhite from "../assets/Icons/dollar_white.svg";
import MenuIcon from "../assets/Icons/menu.svg";
import MenuIconWhite from "../assets/Icons/menu_white.svg";
import ArrowUp from "../assets/Icons/arrow-up-bold-circle.svg";

function Nav({ inViewHero }) {
  function Arrow({ inViewHero }) {
    const handleClick = () => {
      const firstPage = document.querySelector(".hero-container");
      firstPage.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <button
        className={inViewHero ? "arrow-up" : "arrow-up shown"}
        onClick={handleClick}
      >
        <img src={ArrowUp} alt="Arrow" />
      </button>
    );
  }

  return (
    <nav>
      <Link to="/">
        <img
          src={House}
          alt="Homepage icon"
          width="48px"
          className="home-icon"
        />
      </Link>
      <Link to="shop">
        <img
          src={Dollar}
          alt="Dollar icon"
          width="48px"
          className="shop-icon"
        />
      </Link>
      <Arrow inViewHero={inViewHero} />
    </nav>
  );
}

export default Nav;
