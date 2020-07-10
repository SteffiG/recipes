import React from 'react';

import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import SimpleCard from '../../shared/SimpleCards';

const List = ({ newRecipes }) => {
    return (
        <div className="container">
            <Navigation />
            <div>
                {newRecipes.map((addedRecipe, index) =>
                    <SimpleCard
                    name={addedRecipe.name}
                    ingredients={addedRecipe.ingredients}
                    steps={addedRecipe.steps}
                    pictureUrl={addedRecipe.pictureUrl}
                        
                    />
                )}
            </div>
            <Footer />
        </div>
    )
}

export default List;