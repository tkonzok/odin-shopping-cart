import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/normalize.css";
import "../styles/style.css";
import MinusCircle from "../assets/Icons/minus-circle.svg";
import PlusCircle from "../assets/Icons/plus-circle.svg";
import Star from "../assets/Icons/star_yellow.svg";
import CartArrowDown from "../assets/Icons/cart-arrow-down.svg";

function Product({ article, addToCart }) {
  const [amount, setAmount] = article.stock > 0 ? useState(1) : useState(0);

  const handleClickDecrease = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const handleClickIncrease = () => {
    if (amount < article.stock) setAmount(amount + 1);
  };

  const handleClickAddToCart = () => {
    if (amount > 0) return addToCart(article, amount);
  };

  return (
    <div className="product">
      <img className="image" src={article.image}></img>
      <p className="artist">{article.artist}</p>
      <p className="title">{article.title}</p>
      <p className="subtitle">{article.subtitle}</p>
      <p className="published">
        {"("}
        {article.published}
        {")"}
      </p>
      <p className={article.stock == 0 ? "price sold-out" : "price"}>
        € {article.price}
      </p>
      {article.stock > 4 && <p className="stock">Available</p>}
      {article.stock > 0 && article.stock < 5 && (
        <p className="stock limited">Only {article.stock} items left</p>
      )}
      {article.stock == 0 && <p className="stock sold-out">Out of stock</p>}
      <div className="amount">
        <button onClick={handleClickDecrease}>
          <img src={MinusCircle}></img>
        </button>
        <p>{amount}</p>
        <button onClick={handleClickIncrease}>
          <img src={PlusCircle}></img>
        </button>
      </div>
      <div
        className={article.stock == 0 ? "add-to-cart sold-out" : "add-to-cart"}
      >
        <button onClick={handleClickAddToCart}>
          <img src={CartArrowDown}></img> <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
}

function Shop() {
  const {
    cart: [cart, setCart],
    articles: articles,
    cartVisibility: [cartVisible, setCartVisible],
  } = useOutletContext();

  const addToCart = (article, amount) => {
    if (cart.filter((item) => item.id === article.id).length > 0) {
      setCart(
        cart.map((item) =>
          item.id === article.id
            ? { ...item, amount: item.amount + amount }
            : item
        )
      );
    } else {
      setCart([...cart, { id: article.id, amount: amount }]);
    }
    setCartVisible(true);
  };

  let Products = [];
  for (let i = 0; i < articles.length; i++) {
    Products.push(
      <Product
        key={articles[i].id}
        article={articles[i]}
        addToCart={addToCart}
      />
    );
  }

  return (
    <>
      <main>
        <section className="shop-container">
          <h1>Music & More</h1>
          <div className="products-container">{Products}</div>
        </section>
      </main>
    </>
  );
}

export default Shop;
