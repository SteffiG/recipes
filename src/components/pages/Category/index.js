import React from 'react';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import { Link } from 'react-router-dom';
import recipes from '../../../recipes.json';
import '../Categories/Categories.css';

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
                            <Link to={`/categories/${idCategory}/recipe/${index}`} className="card">{recipe.name}</Link>
                        ))}
                </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Category;