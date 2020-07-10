import React from 'react';
import './css/App.css'
import Banner from './components/Banner';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';
import Recipe from './components/pages/Recipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import NewRecipe from './components/pages/NewRecipe';
import List from './components/pages/List';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newRecipes: [],
    };
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
            <Banner />
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