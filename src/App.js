import React from 'react';
import './css/App.css';
import Navigation from './components/Navigation';
import Cards from './components/Cards';

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
    })

    return(
      <div className="App">
        <Navigation />
        <Cards />
        <div className="container">
          <div className="row mt-4">
            { section }
          </div>
        </div>
      </div>

    );
  }
}


export default App;
