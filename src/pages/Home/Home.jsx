import React, { useRef, useEffect, useState } from "react";
import "./Home.css";
import first_image from "../../assets/images/first.png";
import second_image from "../../assets/images/second.png";
import third_image from "../../assets/images/third.png";

const delay = 5200;
const images = [first_image, second_image, third_image];

const Home = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
  <div className="home-container">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image) => (
          <img className="slide" src={image} alt="resim" />
        ))}
      </div>
    </div>
    
  );
};

export default Home;
