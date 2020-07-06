import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/*Aqui encontramos la informacion de contacto*/

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-dir">
                    <h3 className="direction">Contact</h3>
                    <p className="direction">Direccion: <br/>Medellin, Antioquia. Calle 9 #68-49.<br/>3119328720/(034)2346699</p>
                </div>
                <div className="footer-app">
                    <Link to="https://www.instagram.com/" className="footer-app_icon">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link to="https://www.facebook.com/" className="footer-app_icon">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="https://www.twitter.com/" className="footer-app_icon">
                        <i class="fa fa-twitter" aria-hidden="true"></i> 
                    </Link>
                    <Link to="https://www.youtube.com/" className="footer-app_icon">
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </Link>
                </div>
                {/*<div className="author">*/}
                    <p>
                        © Eunoia. 'Una hermosa manera de pensar' • 2020 • Copyright
                    </p>
        {/*</div>*/}
            </div>
            
        );
    }
}

export default Footer;