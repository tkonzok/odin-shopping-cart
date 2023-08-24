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

function Header({
  inViewHero,
  cartVisible,
  toggleCart,
  cart,
  articles,
  removeArticleFromCart,
}) {
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

  function CartItem({ amount, article, removeArticleFromCart }) {
    const handleClick = () => {
      return removeArticleFromCart(article.id);
    };
    return (
      <div className="cart-item">
        <img className="image" src={article.image}></img>
        <p>
          <b>{amount}x</b> {article.title}
        </p>
        <p className="price">€ {article.price}</p>
        <button onClick={handleClick}>X</button>
      </div>
    );
  }

  function Cart({
    cartVisible,
    toggleCart,
    cart,
    articles,
    removeArticleFromCart,
  }) {
    let Products = [];
    for (let i = 0; i < cart.length; i++) {
      Products.push(
        <CartItem
          key={cart[i].id}
          amount={cart[i].amount}
          article={articles.find((article) => article.id === cart[i].id)}
          removeArticleFromCart={removeArticleFromCart}
        />
      );
    }

    return (
      <>
        {Products.length > 0 && <div className="cart-sidebar">{Products}</div>}
        {Products.length == 0 && (
          <div className="cart-sidebar">
            <p>Your cart is empty</p>
          </div>
        )}
      </>
    );
  }

  return (
    <header>
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
      </nav>
      <Arrow inViewHero={inViewHero} />
      <Cart
        cartVisible={cartVisible}
        toggleCart={toggleCart}
        cart={cart}
        articles={articles}
        removeArticleFromCart={removeArticleFromCart}
      />
    </header>
  );
}

export default Header;
