import PropTypes from "prop-types";
import { useState } from "react";
import "./normalize.css";
import "./style.css";
import Album from "./assets/album.png";

function Home() {
  return (
    <>
      <main>
        <section className="content">
          <h2>Home</h2>
          <p>
            Tyrannopötamus Rex ist das Debutalbum des Commanders auf STEREOLA.
            Geboren am 24. September 2021 mit einem Gewicht von 16 Titeln und
            einer Größe von 32:14 Minuten. Wegen der Pandemie und einer Reihe
            anderer, schwieriger Umstände war es eine relativ schwere Geburt.
            Bernd, Felix, Jasper und Tobi sind trotzdem sehr stolz auf ihren
            kleinen Racker!
          </p>
          <img src={Album} alt="Album Picture" className="album-img" />
          <p>
            Anzuhören gibt es den T-Rex analog auf CD und MC. Oder digital als
            Fake-LP und auf den üblichen Kanälen. Z.B. hier:
          </p>
          <iframe
            width="100%"
            height="52"
            src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fi%2F1587016663&amp;theme=light"
          ></iframe>
          <div className="grid-container"></div>
        </section>
      </main>
    </>
  );
}

export default Home;
