import React from 'react'
import "./Carousel.css"

const Carouselitem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <div className="carousel-item-text">{item.description}</div>
      <div className="carousel-item-text">{item.writer}</div>
    </div>
  )
}

export default Carouselitem