import React from 'react';
import logo from '../image/logo.png';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';


class Logo extends React.Component {
    render() {
        return(
            <div>
                <Navigation />
                <img src={logo} className="nav-image" />
                <Footer />
            </div>
        );
    }
} 

export default Logo;