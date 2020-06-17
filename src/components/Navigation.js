import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">Recipes</a>
                <a href="#" className="text-white">Courses</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Navigation;