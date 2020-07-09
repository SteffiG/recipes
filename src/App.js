import React from 'react';
import './css/App.css'
import Banner from './components/Banner.js';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';
import Recipe from './components/pages/Recipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./section.json";
import PageNotFound from './components/pages/PageNotFound';
{/*import ImgMediaCard from './components/shared/Cards';*/}

class App extends React.Component {
  render() {
    return(
        <Router>
        <Switch>
          <Route exact path="/">
            <Banner />
          {/*<ImgMediaCard />
          <ImgMediaCard />*/}
          </Route>
          <Route path="/categories/:categoryId/recipe/:recipeId" component={Recipe} />
          <Route path="/categories/:categoryId" component={Category} />
          <Route path="/categories" component={Categories} />
          <Route component={PageNotFound} />
          {/*<Route path="/NewRecipe">
            <NewRecipe />
          </Route>*/}
        </Switch>
      </Router>
    );
  }
}

export default App;