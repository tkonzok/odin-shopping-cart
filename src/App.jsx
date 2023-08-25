import PropTypes from "prop-types";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./Components/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Dataset from "./assets/data.json";
import "./styles/normalize.css";
import "./styles/style.css";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState([]);

  function toggleCart(cartState) {
    setCartVisible(cartState);
  }

  function removeArticleFromCart(article) {
    setCart(cart.filter((item) => item.id !== article));
  }

  return (
    <>
      <Header
        cartVisible={cartVisible}
        toggleCart={toggleCart}
        cart={cart}
        articles={Dataset.data}
        removeArticleFromCart={removeArticleFromCart}
      />
      <Outlet
        context={{
          cart: [cart, setCart],
          articles: Dataset.data,
          cartVisibility: [cartVisible, setCartVisible],
        }}
      />
      <Footer />
    </>
  );
}

export default App;
