import React, { Component } from "react";

class Header extends Component{
    

    render() {
        let { children } = this.props;
                        //^ props object is passed into the classcomponent as a property by react
        return (
            <header className="jumbotron #f0ad4e">
                <h1>{ children }</h1>
            </header>
        );
    }
}


export default Header;