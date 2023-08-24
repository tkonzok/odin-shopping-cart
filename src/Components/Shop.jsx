import { useState } from "react";
import "../styles/normalize.css";
import "../styles/style.css";
import Dataset from "../assets/data.json";

function Product({ product }) {
  const [amount, setAmount] = product.stock > 0 ? useState(1) : useState(0);

  const handleClickDecrease = () => {
    if (amount > 0) setAmount(amount - 1);
  };

  const handleClickIncrease = () => {
    if (amount < product.stock) setAmount(amount + 1);
  };

  return (
    <div className="product">
      <img className="image" src={product.image}></img>
      <p className="title">{product.title}</p>
      <p className="subtitle">{product.subtitle}</p>
      <p className="published">
        {"("}
        {product.published}
        {")"}
      </p>
      <p className={product.stock == 0 ? "price sold-out" : "price"}>
        € {product.price}
      </p>
      {product.stock > 4 && <p className="stock">Available</p>}
      {product.stock > 0 && product.stock < 5 && (
        <p className="stock limited">Less than 5 in stock</p>
      )}
      {product.stock == 0 && <p className="stock sold-out">Out of stock</p>}
      <p className="rating">
        {product.rating.rate}/5{" "}
        <span className="count">
          {"("}
          {product.rating.count}
          {")"}
        </span>
      </p>
      <div className="amount">
        <button onClick={handleClickDecrease}>-</button>
        <p>{amount}</p>
        <button onClick={handleClickIncrease}>+</button>
      </div>
      <div
        className={product.stock == 0 ? "add-to-cart sold-out" : "add-to-cart"}
      >
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}

function Shop() {
  let Products = [];
  for (let i = 0; i < Dataset.data.length; i++) {
    Products.push(
      <Product key={Dataset.data[i].id} product={Dataset.data[i]} />
    );
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
