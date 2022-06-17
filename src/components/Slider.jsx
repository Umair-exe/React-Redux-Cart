import React from 'react';
// import { Fade } from 'react-slideshow-image';
import './Slider.css';


const Slider = ({ text }) => {
 
    return (
        <div className=' flex justify-center p-20 text-4xl font-extrabold bg-no-repeat bg-cover bg-center bg-fixed bg-gradient-to-r from-lime-700 to-lime-600 sm:text-5xl sm:p-40'>
            <h1>{text}</h1>
        </div>
    );
};

export default Slider;


