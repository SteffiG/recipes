import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

/*Header de la pagina*/

class Navigation extends React.Component{
    render(){
        return(
            <header className="navigation">
                    <nav>
                        <Link to="/" className="nav">Home</Link>
                        <Link to="/categories" className="nav">Recipes</Link>
                        <Link to="/new-recipe" className="nav">New Recipe</Link>
                    </nav>
                    <div>
                        <form>
                            <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                            <a className="search" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                            {/*<button className="search" type="submit">Search</button>*/}
                        </form>
                    </div> 
            </header>
            
        );
    }
}

export default Navigation;