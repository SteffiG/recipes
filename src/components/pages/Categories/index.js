import React from 'react';
import { Link } from 'react-router-dom';
import '../Categories/Categories.css';
import Presentation from '../../shared/Presentation';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import recipes from '../../../recipes.json';
/*Pagina de categorias de recetas*/

class Categories extends React.Component {
    render(){
        return (
            <div>
                <Navigation />    
                <div className="categories">
                <Presentation />
                    <h2 className="name">Categories</h2>
                    <div className="cards">
                    {recipes.map((recipe, index) => (
                        <Link to={`/categories/${index}`} className="card">{recipe.title}</Link>
                    ))}
                    </div>
                </div>  
                <Footer />
            </div>
        );
    }
}

export default Categories;