import PropTypes from "prop-types";
import { useState } from "react";
import "./normalize.css";
import "./style.css";
import Email from "./assets/email.svg";
import Phone from "./assets/phone.svg";
import Open from "./assets/open-in-new.svg";
import House from "./assets/home.svg";
import Dollar from "./assets/dollar.svg";
import Music from "./assets/music.svg";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import Youtube from "./assets/youtube.svg";
import BandImg from "./assets/band-img.jpg";
import Album from "./assets/album.png";

function Header() {
  return (
    <>
      <header>
        <img
          srcSet={`${BandImg} 768w, ${BandImg} 480w`}
          sizes="
      (max-width: 48em) 100vw,
      480px
      "
          alt="Band Picture"
          className="band-img"
        />
        <h1>Commander Nilpfred</h1>
        <article className="about">
          <h2>Commander Who?</h2>
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
        </article>
        <article className="quotes">
          <em>
            „ ...unterhaltsame, wirklich lustige, nicht zu alberne poppige
            Punkmusik mit genau der Menge Indie, dass es trotzdem noch als Punk
            durchgeht.“
          </em>
          <p>(bierschinken.net)</p>
          <em>„Überraschend ausgereift“</em>
          <p>(Brot-Magazin #7)</p>
          <em>
            „Wo gab es schon mal eine Band die [...] KOTZREIZ, MUFF POTTER,
            BOXHAMSTERS, TERRORGRUPPE und DIE ÄRZTE miteinander kombiniert
            hätte?”
          </em>
          <p>(ox #162)</p>
          <em>
            „Die beigemischte Akustikgitarre hebt das Gute-Laune-Level und sorgt
            für zusätzlichen Schwung.”
          </em>
          <p>(blueprint-fanzine)</p>
          <footer className="links">
            <a href="https://nilpfred.de">
              <img
                src={House}
                alt="Homepage icon"
                width="48px"
                className="website"
              />
            </a>
            <a href="https://stereola.bandcamp.com/">
              <img
                src={Music}
                alt="Bandcamp icon"
                width="48px"
                className="bandcamp"
              />
            </a>
            <a href="https://www.facebook.com/nilpfred">
              <img
                src={Facebook}
                alt="Facebook icon"
                width="48px"
                className="facebook"
              />
            </a>
            <a href="https://www.instagram.com/commander_nilpfred/">
              <img
                src={Instagram}
                alt="Instagram icon"
                width="48px"
                className="instagram"
              />
            </a>
            <a href="https://www.youtube.com/results?search_query=commander+nilpfred">
              <img
                src={Youtube}
                alt="YouTube icon"
                width="48px"
                className="youtube"
              />
            </a>
          </footer>
        </article>
      </header>
    </>
  );
}

export default Header;
