import React from 'react'
import { useState } from 'react';
import Carouselitem from './Carouselitem'
import "./Carousel.css"
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            description:
            "Excellent services delivered. I am very much happy with the work.",
            writer: "- Nisha Jayakumar"
        },
        {
          description:
            "Wonderful digital service! Timely delivery and quick response by the team.",
            writer: "- Inderpreet Kaur"

        },
        {
          description:
            "We are associated with Saanzz Digital for last 2 years. They are brilliant with complete Digital Marketing strategy and execution. We are really happy with their Services.",
            writer: "- Manish Pokale"
        },
        {
          description:
            "Really appreciate the skills & competency the team has. They are very responsive and prompt in execution. My content was delivered in a short time span with no compromise on quality.",
            writer: "- Shelly Soni"
        },
      ];

      const updateIndex = (newIndex) => {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= items.length) {
          newIndex = items.length - 1;
        }
    
        setActiveIndex(newIndex);
      };

  return (
    <div className="carousel">
    <div
      className="inner"
      style={{ transform: `translate(-${activeIndex * 100}%)`
   }}
    >
      {items.map((item) => {
        return <Carouselitem item={item} width={"100%"} />;
      })}
    </div>

    <div className="carousel-buttons">
      <button
        className="button-arrow"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
      </button>
      <div className="indicators">
        {items.map((item, index) => {
          return (
            <button
              className="indicator-buttons"
              onClick={() => {
                updateIndex(index);
              }}
            >
              <span
                className={`material-symbols-outlined ${
                  index === activeIndex
                    ? "indicator-symbol-active"
                    : "indicator-symbol"
                }`}
              >
                radio_button_checked
              </span>
            </button>
          );
        })}
      </div>
      <button
        className="button-arrow"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </div>
  </div>
  )
}

export default Carousel