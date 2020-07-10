import React from 'react';
import './css/App.css'
import Banner from './components/Banner.js';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';
import Recipe from './components/pages/Recipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';

class App extends React.Component {
  constructor(props) {
    super(props);

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
  
  render() {
    return(
        <Router>
        <Switch>
          <Route exact path="/">
            <Banner />
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