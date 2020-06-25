import React from 'react';
import './Navigation.css';

class Navigation extends React.Component{
    render(){
        return(
            <div className="navigation">
                    <nav>
                        <a href="#" className="nav">Home</a>
                        <a href="#" className="nav">Recipes</a>
                        <a href="#" className="nav">Courses</a>
                    </nav>
                    <div>
                        <form>
                            <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
                            <a className="search" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                            {/*<button className="search" type="submit">Search</button>*/}
                        </form>
                    </div> 
            </div>
            
        );
    }
}

export default Navigation;