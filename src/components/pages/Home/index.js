import React from 'react';
import AboutUs from '../../shared/AboutUs';
import Banner from '../../shared/Banner';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navigation />
                <Banner />
                <AboutUs />
                <Footer />
            </div>
        );
    }
}

export default Home;