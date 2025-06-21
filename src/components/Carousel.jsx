import { useState, useEffect } from "react";
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import '../styles/index.css';

const images = [img1, img2, img3];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>

      <div className="carousel-slide">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide ${index}`}
            className={index === current ? "active" : "inactive"}
          />
        ))}
      </div>

      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;