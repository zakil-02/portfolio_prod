import React from "react";
import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel fade interval={null} className="project-carousel">
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
