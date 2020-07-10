import React from 'react';
import './css/App.css'
import Home from './components/pages/Home';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';
import Recipe from './components/pages/Recipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import NewRecipe from './components/pages/NewRecipe';
import List from './components/pages/RecipesList';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newRecipes: []
    };

    //Call capi and store on sessionStorage the result
    let myheaders = {
      "secret-key": '$2b$10$bfH.Nttu0XltHXoVfVkd5ePgqbk1orKam2iSoTEt8hOMa/Fk5cyv6'    
    };
    fetch('https://api.jsonbin.io/b/5f07ab8c5d4af74b012981c4', {
      method: "GET",
      headers: myheaders
    }).then(function(response) {
      return response.json();     
    }, function(error) {
      console.log(error.message); //=> String
    }).then(function(resultJson) {
        sessionStorage.setItem('recipes',JSON.stringify(resultJson));
    });
  }

  addRecipe = (newRecipe) => {
    //Recibe el Estado de del componene NewRecipe
    this.setState({
      newRecipes: [...this.state.newRecipes, newRecipe],
    });
  };

  render() {
    const { newRecipes } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories/:categoryId/recipe/:recipeId" component={Recipe} />
          <Route path="/categories/:categoryId" component={Category}/>
          <Route path="/added-recipes">
            <List newRecipes={newRecipes}/>
          </Route>
          <Route path="/categories" component={Categories} />
          <Route path="/new-recipe">
            <NewRecipe onCreate={this.addRecipe} />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;