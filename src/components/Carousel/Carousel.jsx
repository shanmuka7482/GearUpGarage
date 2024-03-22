import React, { useState, useEffect } from "react";
import { Slidedata } from "./Carousel-data";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "./Carousel.css";

function Carousel() {
  const [current, setcurrent] = useState(0);
  const length = Slidedata.length;

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000); // Adjust the interval time as needed (e.g., 3000 milliseconds for 3 seconds)
    return () => clearInterval(interval);
  }, [current]); // This ensures that the interval is cleared and reset whenever the current slide changes

  if (!Array.isArray(Slidedata) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <SlArrowLeft className="leftarrow" onClick={prevSlide} />
      <SlArrowRight className="rightarrow" onClick={nextSlide} />
      {Slidedata.map((slide, index) => {
        return (
          <div
            className={index === current ? "slideactive" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt={slide.title} className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
