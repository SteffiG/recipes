import React from 'react';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import recipes from '../../../recipes.json';
import '../Categories/Categories.css';
import ImgMediaCard from '../../shared/Cards';

class Category extends React.Component {
    render() {
        const { match: { params } } = this.props;
        let idCategory = params.categoryId;
        return(
            <div className="container">
                <Navigation/>
                <div className="categories">
                    <h2>Categoria</h2>
                    <div className="cards">
                        {recipes[idCategory].recipes.map((recipe, index) => (
                            <ImgMediaCard
                                typoLink={`/categories/${idCategory}/recipe/${index}`} 
                                title={recipe.name}
                                image={recipe.image} 
                            />
                        ))}
                        
                </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Category;