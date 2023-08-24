import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/normalize.css";
import "../styles/style.css";
import MinusCircle from "../assets/Icons/minus-circle.svg";
import PlusCircle from "../assets/Icons/plus-circle.svg";
import Star from "../assets/Icons/star_yellow.svg";

function Product({ article }) {
  const [amount, setAmount] = article.stock > 0 ? useState(1) : useState(0);

  const handleClickDecrease = () => {
    if (amount > 0) setAmount(amount - 1);
  };

  const handleClickIncrease = () => {
    if (amount < article.stock) setAmount(amount + 1);
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
      <p className="rating">
        <img src={Star} width="24px"></img>{" "}
        <span>{article.rating.rate}/5 </span>
        <span className="count">
          {" ("}
          {article.rating.count}
          {")"}
        </span>
      </p>
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
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}

function Shop() {
  const {
    cart: [cart, setCart],
    articles: articles,
  } = useOutletContext();

  let Products = [];
  for (let i = 0; i < articles.length; i++) {
    Products.push(<Product key={articles[i].id} article={articles[i]} />);
  }

  return (
    <>
      <main>
        <section className="shop-container">
          <h2>Shop</h2>
          <div className="products-container">{Products}</div>
        </section>
      </main>
    </>
  );
}

export default Shop;
