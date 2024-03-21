import React, { useState } from "react";
import { Slidedata } from "./Carousel-data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
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
  console.log(length);
  if (!Array.isArray(Slidedata) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="leftarrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide} />
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
