import React from 'react';
import './Recipes.css';
import Card from '../../shared/Card';
import Navigation from '../../shared/Navigation'


class Recipes extends React.Component {
    render(){
        return (
            <div className="recipes">
                <div className="recipes">
                    <Navigation />
                    <Card />
                </div>
            </div>
        );
    }
}

export default Recipes;