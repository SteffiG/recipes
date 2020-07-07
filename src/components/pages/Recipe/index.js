import React from 'react';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import recipes from '../../../recipes.json';
import '../Categories/Categories.css';
import './Recipe.css';

class Recipe extends React.Component {

    render() {
        const { match: { params } } = this.props;
        let idCategory = params.categoryId;
        let recipeId = params.recipeId;
        let recipeSelected = recipes[idCategory].recipes[recipeId];
        
        return(
            <div className="container">
                <Navigation />
                <div className="recipe">
                <h2>{recipeSelected.name}</h2>
                <div className="steps">
                    <div  className="recipe-ingredient">
                        {recipeSelected.ingredientes.map((ingredient) => (
                            <p className="ingredients">{ingredient}</p>
                        ))}         
                    </div>
                    <div className="recipe-preparation">
                        {recipeSelected.preparacion.map((preparation) => (
                            <p className="preparation">{preparation}</p>
                        ))}
                    </div>
                </div>
                </div>
                {/* <Cards title='' /> */}
                <Footer />
            </div>
            
        );
    }
}

export default Recipe;