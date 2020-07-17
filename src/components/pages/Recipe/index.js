import React from 'react';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import '../Categories/Categories.css';
import './Recipe.css';
import ImgMediaCard from '../../shared/Cards';
import PageNotFound from '../../pages/PageNotFound';


class Recipe extends React.Component {
    render() {
        let categories = JSON.parse(sessionStorage.getItem('recipes'));
        const { match: { params } } = this.props;
        let idCategory = params.categoryId;
        let recipeId = params.recipeId;
        let recipeSelected = categories[idCategory].recipes[recipeId];
        console.log(parseInt(recipeSelected));
        
        if (parseInt(recipeId) || recipeId === '0'){
            return(
                <div className="container">
                    <Navigation />
                    <div className="recipe">
                        <h2 className="recipe-name">{recipeSelected.name}</h2>
                        <div className="steps">
                            <ImgMediaCard 
                                image={recipeSelected.image}
                                list={recipeSelected.ingredientes}
                                list2={recipeSelected.preparation}
                            />
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }
        return(
            <PageNotFound />
        )
    }
}

export default Recipe;