import React from 'react';
import './banner.css';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';
import AboutUs from './AboutUs';

const Banner = () => {
    return(
        <div>
            <Navigation />
            <div className="banner">
            <p className="banner-text">Welcome!<br/>Get inspired with us.</p>
            </div>
            <AboutUs />
            <Footer />
        </div>        
    );
};

export default Banner;