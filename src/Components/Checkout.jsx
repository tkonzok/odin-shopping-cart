import "../styles/normalize.css";
import "../styles/style.css";
import { useOutletContext } from "react-router-dom";
import Facebook from "../assets/Icons/facebook.svg";
import Instagram from "../assets/Icons/instagram.svg";
import Youtube from "../assets/Icons/youtube.svg";
import Email from "../assets/Icons/email.svg";

function Checkout() {
  const {
    cart: [cart, setCart],
    articles: articles,
  } = useOutletContext();

  function CartItem({ amount, article }) {
    return (
      <div className="cart-item">
        <img className="image" src={article.image}></img>
        <p>
          <b>{amount}x</b> {article.title}
        </p>
        <p className="price">€ {article.price * amount}</p>
      </div>
    );
  }

  let Products = [];
  for (let i = 0; i < cart.length; i++) {
    Products.push(
      <CartItem
        key={cart[i].id}
        amount={cart[i].amount}
        article={articles.find((article) => article.id === cart[i].id)}
      />
    );
  }

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
    <>
      <main>
        <section className="content">
          <h2>Checkout</h2>
          <div className="checkout-overview">
            <div className="articles">{Products}</div>
            <div className="sum">
              <Sum />
            </div>
            <div className="overlay">
              <p>Thanks for you interest in our products.</p>
              <p>
                This would be the page to finally check and afterwards place
                your order. Unfortunately, this shop is not in operation yet.
              </p>
              <p>
                If you want to buy our music we would like to redirect you to
                our Bandcamp page. Alternatively you can send us a message on
                your favourite platform.
              </p>
              <a href="https://stereola.bandcamp.com/">Bandcamp</a>
              <a href="https://open.spotify.com/intl-de/album/1Ecu1ss9rh6ZbYVXcTqz6H">
                Spotify
              </a>
              <a href="mailto:commander@nilpfred.de">
                <img
                  src={Email}
                  alt="Email icon"
                  width="32px"
                  className="email"
                />
                <span>commander@nilpfred.de</span>
              </a>
              <div className="links">
                <a href="https://www.facebook.com/nilpfred">
                  <img
                    src={Facebook}
                    alt="Facebook icon"
                    className="facebook"
                  />
                </a>
                <a href="https://www.instagram.com/commander_nilpfred/">
                  <img
                    src={Instagram}
                    alt="Instagram icon"
                    className="instagram"
                  />
                </a>
                <a href="https://www.youtube.com/results?search_query=commander+nilpfred">
                  <img src={Youtube} alt="YouTube icon" className="youtube" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Checkout;
