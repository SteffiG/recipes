import React from 'react';
import './Presentation.css';

/*Card ubicada sobre el titulo en la pagina de recetas*/

class Presentation extends React.Component {
    render() {
        return(
            <div className="presentation">
                    <h5 className="presentation-title">Recipes</h5>
                    <p className="presentation-text">Welcome, we are hope that you found<br/> all you want in our recipes section</p>
            </div>
        );
    }
}

export default Presentation;