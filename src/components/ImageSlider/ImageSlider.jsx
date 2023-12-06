import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const changeImage = () => {
    setOpacity(0); // Geçiş başladığında opacity'yi sıfıra ayarla

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
      setOpacity(1); // Yeni resimde opacity'yi bir yap
    }, 10000); // Timeout süresi, geçişin tamamlanma süresinden kısa olmalı
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <img
        className={`bg-image ${currentImageIndex === 0 ? "show" : ""}`}
        style={{ opacity: opacity }}
        src={props.images[currentImageIndex]}
        alt={`${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default ImageSlider;