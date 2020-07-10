import React from 'react';
import '../Categories/Categories.css';
import Presentation from '../../shared/Presentation';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import ImgMediaCard from '../../shared/Cards';
class Categories extends React.Component {
    render() {
        let categories = JSON.parse(sessionStorage.getItem('recipes'));

        return (
            <div>
                <Navigation />
                <div className="categories">
                    <Presentation />
                    <h2 className="name">Categories</h2>
                    <div className="cards">
                        {categories.map((category, index) => (
                            <ImgMediaCard
                                description={category.description}
                                typoLink={`/categories/${index}`}
                                title={category.title}
                                image={category.image}
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