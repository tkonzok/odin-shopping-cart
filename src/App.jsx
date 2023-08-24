import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./Components/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Dataset from "./assets/data.json";
import "./styles/normalize.css";
import "./styles/style.css";

function App() {
  const [refHero, inViewHero] = useInView({
    threshold: 0,
    delay: 0,
  });

  const [cartVisible, setCartVisible] = useState(true); // to be changed after development
  const [cart, setCart] = useState([
    { id: 0, amount: 1 },
    { id: 5, amount: 1 },
  ]); // to be changed after development

  function toggleCart(cartState) {
    setCartVisible(cartState);
  }

  function removeArticleFromCart(article) {
    setCart(cart.filter((item) => item.id !== article));
  }

  return (
    <>
      <Header
        inViewHero={inViewHero}
        cartVisible={cartVisible}
        toggleCart={toggleCart}
        cart={cart}
        articles={Dataset.data}
        removeArticleFromCart={removeArticleFromCart}
      />
      <Outlet
        ref={refHero}
        context={{
          cart: [cart, setCart],
          articles: Dataset.data,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
