import { Link } from "react-router-dom";
import "../styles/normalize.css";
import "../styles/style.css";
import House from "../assets/Icons/home.svg";
import HouseWhite from "../assets/Icons/home_white.svg";
import Dollar from "../assets/Icons/dollar.svg";
import DollarWhite from "../assets/Icons/dollar_white.svg";
import CartOutline from "../assets/Icons/cart-outline.svg";
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

  const handleToggleCart = () => {
    toggleCart(!cartVisible);
  };

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
        <p className="price">€ {article.price * amount}</p>
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

    const continueShopping = () => {
      toggleCart(false);
    };

    const Sum = () => {
      let subtotal = 0;
      for (let item of cart) {
        let price = articles.find((article) => article.id === item.id).price;
        subtotal += price * item.amount;
      }
      const shipping = subtotal > 0 ? 4.99 : 0;
      const vat = Math.round((subtotal + shipping) * 19) / 100;
      const total = subtotal + shipping + vat;

      return (
        <>
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>€ {subtotal.toFixed(2)}</span>
          </div>
          <div className="shipping">
            <span>Shipping:</span>
            <span>€ {shipping.toFixed(2)}</span>
          </div>
          <div className="vat">
            <span>VAT 19%:</span>
            <span>€ {vat.toFixed(2)}</span>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>€ {total.toFixed(2)}</span>
          </div>
        </>
      );
    };

    return (
      <div
        className={cartVisible ? "cart-sidebar visible" : "cart-sidebar hidden"}
      >
        <div className="articles">
          {Products.length > 0 ? Products : <p>Your cart is empty</p>}
        </div>
        {Products.length > 0 && (
          <>
            <div className="sum">
              <Sum />
            </div>
            <Link to="checkout" cart={cart} articles={articles}>
              <button>Go To Checkout</button>
            </Link>
          </>
        )}
        <button onClick={continueShopping}>Continue Shopping</button>
      </div>
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
          <span>Home</span>
        </Link>
        <Link to="shop">
          <img
            src={Dollar}
            alt="Dollar icon"
            width="48px"
            className="shop-icon"
          />
          <span>Shop</span>
        </Link>
        <a className="cart-icon" onClick={handleToggleCart}>
          <img src={CartOutline} alt="Cart icon" width="48px" />
          {cart.length > 0 && (
            <span className="number-articles">{cart.length}</span>
          )}
        </a>
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
