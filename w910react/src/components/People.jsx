import React from "react";

// nothing but input statmnts ever goes up here in normal Usecasses

const People = ( {names} )  => (

    names ? (
        <ul className= "list-group">
            { names.map((name, index) => (
                <li className="list-group-item" key={ index }>{ name }</li>
           )) }
       </ul>
    ) :
    <p>Nothing to see here</p> 
);

// nothing but output statmnts ever goes up here in normal Usecasses

export default People;

