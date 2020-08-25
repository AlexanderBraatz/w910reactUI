import React from "react";

// the props object is passed as the argument with all props declared in Stuff as its properties
//props.text === { text } because we are still in Js land no {{ text}}
const Header = ({text}) => (
    <header className="jumbotron #f0ad4e">
        <h1>{ text }</h1>
    </header>
);

export default Header;