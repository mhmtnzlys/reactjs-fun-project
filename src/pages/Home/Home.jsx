import React, { useState, useEffect } from 'react';
import './Home.css';
import first_image from '../../assets/images/first.png';
import second_image from '../../assets/images/second.png';
import third_image from '../../assets/images/third.png';

const images = [first_image, second_image, third_image];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='home-container'>
            <div className="container">
                <img className="bg-image" src={images[currentImage]} />
            </div>
            <div className="container">
                <img className="bg-image" src={first_image} alt="Resim açıklaması" />
            </div>
        </div>
    );
};

export default Home;
