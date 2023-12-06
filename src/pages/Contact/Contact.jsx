import React, { useEffect, useState } from 'react';
import first_image from '../../assets/images/first.png';
import second_image from '../../assets/images/second.png';
import third_image from '../../assets/images/third.png';
import './Contact.css'
import ImageSlider from '../../components/ImageSlider/ImageSlider';


const images = [first_image, second_image, third_image];

const Contact = () => {

    return (
        <div className='contact-container'>
            <ImageSlider images={images} />
        </div>
    );
};

export default Contact;
