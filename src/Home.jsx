import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./normalize.css";
import "./style.css";
import Album from "./assets/album.png";

function SlidingIn() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <img
      ref={ref}
      src={Album}
      alt="Album Picture"
      className={inView ? "album-img sliding-in right" : "album-img"}
    />
  );
}

function Home() {
  /*
  const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }, [containerRef, options]);

    return [containerRef, isVisible];
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const [containerRef, isVisible] = useElementOnScreen(options);
  */

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
          <SlidingIn />
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
