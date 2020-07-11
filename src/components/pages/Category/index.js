import React from 'react';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import '../Categories/Categories.css';
import ImgMediaCard from '../../shared/Cards';
import PageNotFound from '../../pages/PageNotFound';
class Category extends React.Component {
    render() {
        let categories = JSON.parse(sessionStorage.getItem('recipes'));
        const { match: { params } } = this.props;
        let idCategory = params.categoryId;
        
        if (parseInt(idCategory) || idCategory === '0'){
            return(
                <div className="container">
                    <Navigation/>
                    <div className="categories">
                        <h2>{`${categories[idCategory].category} category`}</h2>
                        <div className="cards">
                            {categories[idCategory].recipes.map((recipe, index) => (
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
        return(
            <PageNotFound />
        )
    }
}

export default Category;