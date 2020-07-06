import React from 'react';
import './banner.css';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';

/*Banner de la pagina, se ubica en el home*/

const Banner = ({}) => {
    return(
        <div>
            <Navigation />
            <div className="banner">
            <p className="banner-text">Welcome!<br/>Get inspired with us.</p>
            </div>
            <Footer />
        </div>
        
    );
};

export default Banner;