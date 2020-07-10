import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import LongMenu from '../../shared/Menu';

class Navigation extends React.Component{
    render(){
        return(
            <header className="navigation">
                <LongMenu />
                <nav>
                    <Link to="/" className="nav"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                    <Link to="/categories" className="nav"><i className="fa fa-cutlery" aria-hidden="true"></i> Recipes</Link>
                    <Link to="/new-recipe" className="nav"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> New Recipe</Link>
                </nav>
                <div>
                    <form action="#" method="POST" >
                        <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                        <a className="search" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                    </form>
                </div>
            </header>
        );
    }
}

export default Navigation;