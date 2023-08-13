import PropTypes from "prop-types";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
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
import Bandinfo from "./assets/bandinfo.pdf";

function SlidingIn() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <img
      ref={ref}
      srcSet={`${BandImg} 768w, ${BandImg} 480w`}
      sizes="
      (max-width: 48em) 100vw,
      480px
      "
      alt="Band Picture"
      className={inView ? "band-img sliding-in left" : "band-img"}
    />
  );
}

function Header() {
  return (
    <>
      <header>
        <SlidingIn />
        <h1>Commander Nilpfred</h1>
        <article className="about">
          <h2>Commander Who?</h2>
          <p>
            Der Commander macht Powerpoppunkrock (also wohl eher Punkpop als
            Poppunk) mit Akustikgitarre. Auf deutsch. Seit 2016. Deutlich
            flotter als man das von einem Nilpfred vermuten würde. Die Commander
            (vlnr) sind:
          </p>
          <ul>
            <li>Jasper (Schlagzeug und Gesang)</li>
            <li>Tobi (Akustikgitarre und Gesang)</li>
            <li>Bernd (Gesang und Bass)</li>
            <li>Felix (E-Gitarre und Gesang)</li>
          </ul>
          <p>
            immer gut gelaunt, aber nicht in der Lage, schlüssig zu erklären,{" "}
            <em>"was der Scheißname bedeutet."</em>
          </p>
          <p>Mehr steht in der</p>
          <a href={Bandinfo} className="bandinfo">
            einigermaßen aktuellen Bandinfo (PDF)
          </a>
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
        </article>
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
      </header>
    </>
  );
}

export default Header;
