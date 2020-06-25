import React from 'react';
import './css/App.css';
import Navigation from './components/shared/Navigation';
import Banner from './components/Banner';
import Recipes from './components/pages/Recipes';
import Footer from './components/shared/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/*este archivo es para simular datos que vienen de backend, por lo menos asi lo entendi, y si estoy en lo correcto eso lo hace la API(no estoy 100% segura)*/
import { section } from './section.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      section
    }
  }


  render() {
    const section = this.state.section.map((section, i) => {
      return (
        <div className="col-md-4">
          <div className="card-mt-4">
              <div className="card-header">
                  <h3>{section.title}</h3>
                  <span className="badge badge-pill ml-2">{section.description}</span>
              </div>
          </div>
        </div>
      );
    });

    return(
        <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Banner />
            {/*<About />*/}
            <Footer />
          </Route>
          <Route path="/Recipes">
            <Recipes />
            <div className="container">
                <div className="row mt-4">
                  { section }
                </div>
              </div>
          </Route>
          {/*<Route path="/NewRecipe">
            <NewRecipe />
          </Route>*/}
        </Switch>
      </Router>
    );
  }
}

export default App;
