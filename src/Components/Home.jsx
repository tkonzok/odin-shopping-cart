import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/normalize.css";
import "../styles/style.css";
import Album512 from "../assets/Images/album_512.png";

function Headlines() {
  const { refHeadline, inViewHeadline } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [headline, setHeadline] = useState(0);

  async function startNewInterval(msec) {
    await new Promise((resolve) => setTimeout(resolve, msec));
    if (headline < 1) {
      setHeadline(headline + 1);
    } else {
      setHeadline(0);
    }
  }

  useEffect(() => {
    startNewInterval(5000);
  }, [headline]);

  return (
    <div ref={refHeadline} className="headlines">
      <div
        className={headline === 0 ? "headline visible" : "headline invisible"}
      >
        <h1>Commander Merchfred</h1>
      </div>
      <div
        className={headline === 1 ? "headline visible" : "headline invisible"}
      >
        <h1>Commercial Nilpfred</h1>
      </div>
    </div>
  );
}

function SlidingInAlbum() {
  return <img src={Album512} alt="Album Picture" className="album-img" />;
}

function Home() {
  return (
    <>
      <main>
        <section className="home-container">
          <Headlines />
          <div className="introduction">
            <h2>Tyrannopötamus Rex</h2>
            <p>
              Tyrannopötamus Rex ist das Debutalbum des Commanders auf STEREOLA.
              Geboren am 24. September 2021 mit einem Gewicht von 16 Titeln und
              einer Größe von 32:14 Minuten. Wegen der Pandemie und einer Reihe
              anderer, schwieriger Umstände war es eine relativ schwere Geburt.
              Bernd, Felix, Jasper und Tobi sind trotzdem sehr stolz auf ihren
              kleinen Racker!
            </p>
          </div>
          <div className="album-img-container">
            <SlidingInAlbum />
          </div>
          <div className="link-to-shop">
            <Link to="shop">
              <button>To the Shop</button>
            </Link>
          </div>
          <div>
            <p>
              Anzuhören gibt es den T-Rex analog auf CD und MC. Oder digital als
              Fake-LP und auf den üblichen Kanälen. Z.B. hier:
            </p>
            <iframe
              width="50%"
              height="52"
              src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fi%2F1587016663&amp;theme=light"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
