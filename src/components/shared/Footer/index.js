import React from 'react';
import './Footer.css';

/*Aqui encontramos la información de contacto*/

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-dir">
                    <h3 className="direction">Contact</h3>
                    <p className="direction">Direction: <br/>Medellín, Antioquia. Calle 9 #68-49.<br/>3119328720/(034)2346699</p>
                </div>
                <div className="footer-app">
                    {/*los links en este caso estan con el anchor debido a que la opción Link de react router es para links internos de la página*/}
                    <a href="https://www.instagram.com/" target="_blanck" className="footer-app_icon">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blanck" className="footer-app_icon">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blanck" className="footer-app_icon">
                        <i class="fa fa-twitter" aria-hidden="true"></i> 
                    </a>
                    <a href="https://www.youtube.com/" target="_blanck" className="footer-app_icon">
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                </div>
                <p className="copyright">
                    © Eunoia. 'Una hermosa manera de pensar' • 2020 • Copyright
                </p>
            </div>
            
        );
    }
}

export default Footer;