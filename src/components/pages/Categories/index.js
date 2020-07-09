import React from 'react';
import '../Categories/Categories.css';
import Presentation from '../../shared/Presentation';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import recipes from '../../../recipes.json';
import ImgMediaCard from '../../shared/Cards';
/*Pagina de categorias de recetas*/

class Categories extends React.Component {
    render(){
        return (
            <div>
                <Navigation />                
                <div className="categories">
                    <Presentation />
                    <h2 className="name">Categorias</h2>
                    <div className="cards">
                        {recipes.map((recipe, index) => (
                            <ImgMediaCard
                                description={recipe.description}
                                typoLink={`/categories/${index}`} 
                                title={recipe.title}
                                image={recipe.image} 
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Categories;