import React,  { useState } from "react";

const ToggleTextH = ({initial, alternate }) => {

    const [toggled , setToggled ] = useState( false );
    const handleClick = () => setToggled( !toggled ); 

    let output = toggled ? initial : alternate;
    
    return(
        <>
        <p>{ output }</p>
        <button 
            onClick= { handleClick }
            type="button" className="btn btn-primary m-3"
        >switch</button>
    </>
    )
}

export default ToggleTextH ;