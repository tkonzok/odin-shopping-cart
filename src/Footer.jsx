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

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="info">
            <h2 className="span">Contact Us</h2>
            <p className="span">
              Für Booking- und Autogrammanfragen oder einfach nur Komplimente.
            </p>
            <p className="span">
              cBernardy Werbung für Commander Nilpfred
              <br />
              Am Brennermoor 39
              <br />
              23843 Bad Oldesloe
            </p>
            <img src={Phone} alt="Phone icon" width="32px" className="phone" />
            <p>+49 (0) 4531 679446</p>
            <a href="mailto:commander@nilpfred.de">
              <img
                src={Email}
                alt="Email icon"
                width="32px"
                className="email"
              />
            </a>
            <p>commander@nilpfred.de</p>
            <div className="links span">
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
            </div>
          </div>

          <img
            srcSet="
            https://www.cbernardy.de/nilpfred/assets/img/bandfoto_Drage.jpg 768w,
            https://www.cbernardy.de/nilpfred/assets/img/bandfoto_Drage.jpg 480w
          "
            sizes="
          (max-width: 48em) 100vw,
          480px
          "
            alt="Live picture"
            className="live-img"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
