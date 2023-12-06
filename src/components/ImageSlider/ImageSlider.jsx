import React, { useEffect, useState } from 'react';
import './ImageSlider.css'

const ImageSlider = (props) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    };
    useEffect(() => {
        const interval = setInterval(changeImage, 2000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="image-container">
            <img
                className="image-slider"
                src={props.images[currentImageIndex]}
                alt='test-resim'
            />
        </div>
    );
};

export default ImageSlider;
