import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div className="page">
        <p className="page-description">Uy, llegaste a un mundo desconocido. Mejor regresa al <Link to="/" className="page-link">inicio.</Link></p>
        <img className="image" src="https://www.pfchangs.com/images/default-source/default-album/website-404errorpage-v23f59853857be6e10a67fff0000af721d.jpg?sfvrsn=90e7eb35_0" alt="404" />
    </div>   
);

export default PageNotFound