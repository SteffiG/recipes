import React from 'react';
import Navigation from '../../shared/Navigation';
import Footer from '../../shared/Footer';
import { Link } from 'react-router-dom';


import './NewRecipe.css';

class NewRecipe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            ingredients: '',
            steps: '',
            pictureUrl: ''
        }
    }

    handleOnUpdateField = (value, field) => {
        this.setState({
            [field]: value,
        });
    };

    handleOnSave = () => {
        //console.log(this.state);
        //Le vamos a mandar el Estado a App
        this.props.onCreate(this.state);
        console.log("seMandaEstado",this.state)
    }

    render() {

        return (
            <div>
                <Navigation />
                <div>
                    <h3>Add your recipe</h3>
                    <div>
                        <div className="text-new-recipe">
                            <p>Title:</p>
                            <input className="box-new-recipe"
                                placeholder="Add Recipe Title"
                                onChange={(event) => {
                                    // event.target.value lo que está en el campo
                                    this.handleOnUpdateField(event.target.value, 'name');
                                }}
                            />
                        </div>
                    </div>
                    <div className="text-new-recipe">
                        <p>Ingredients:</p>
                        <textarea className="box-new-recipe"
                            placeholder="Add the Recipe ingredients"
                            onChange={(event) => {
                                this.handleOnUpdateField(event.target.value, 'ingredients');
                            }}
                        />
                    </div>
                    <div className="text-new-recipe">
                        <p>Steps:</p>
                        <textarea className="box-new-recipe"
                            placeholder="Add the Recipe steps"
                            onChange={(event) => {
                                this.handleOnUpdateField(event.target.value, 'steps');
                            }}
                        />
                    </div>
                    <div className="text-new-recipe">
                        <p>Picture:</p>
                        <input className="box-new-recipe"
                            placeholder="Add picture URL"
                            onChange={(event) => {
                                this.handleOnUpdateField(event.target.value, 'pictureUrl');
                            }}
                        />
                    </div>
                    <div className="button">
                            
                            <Link to={`/added-recipes`} className="card">
                                <button onClick={this.handleOnSave}>Create</button>
                            </Link>
                            {console.log("nueva",this.state)}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default NewRecipe;