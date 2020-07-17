import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about">
            <img className="about-img" src="https://pngimg.com/uploads/pancake/pancake_PNG116.png" alt="image-food"/>
            <div className="about-description">
                <h1 className="about-title">About Us</h1>
                <p className="about-content">We are girls who are learning to program in react and who believe that programming and cooking are like magic, both things fill the soul. We hope this is transmitted with our page</p>
            </div>
        </div>
    );
}

export default AboutUs;