import React from 'react';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import SimpleCard from '../../shared/SimpleCards';
import NoRecipesAdded from '../NoRecipesAdded';
import './RecipesList.css';

const List = ({ newRecipes }) => {
    console.log("new", newRecipes)

    if (!newRecipes.length == 0) {
        return (
            <div >
                <Navigation />
                <div className="added-recipes">
                    <h3>Added recipes</h3>
                    <div className="added-recipes-cards">
                        {newRecipes.map((addedRecipe) =>
                            <SimpleCard
                                name={addedRecipe.name}
                                ingredients={addedRecipe.ingredients}
                                steps={addedRecipe.steps}
                                pictureUrl={addedRecipe.pictureUrl}
                            />
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <NoRecipesAdded />
        )
    }
}

export default List;