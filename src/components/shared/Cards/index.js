import React from 'react';
/*este archivo es para simular datos que vienen de backend, por lo menos asi lo entendi, y si estoy en lo correcto eso lo hace la API(no estoy 100% segura)*/
import recipes from '../../../recipes.json';
import './Cards.css';
/*Cards con contenido de recetas, nos redireccionan a una pagina con la categoria o receta seleccionada*/

class Cards extends React.Component {
    constructor() {
        super();
        this.state = {
          recipes
        }
    }
    
    render() {
        const recipes = this.state.recipes.map((recipes) => {
          return (
              <div className="cards">
                <p className="cards-title">{recipes.title}</p>
              </div>
          );
        });

        return(
          <div className="container">
            { recipes }
          </div>
        );
        
    }        
}

export default Cards;