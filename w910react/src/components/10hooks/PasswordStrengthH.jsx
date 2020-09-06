import React, { useState } from "react";


const calculateStyle = ( input ) => {
    return (input.length === 0) ? { } : {
        backgroundColor : calculateColour(input.length),
    };
};

const calculateColour = ( length ) => {
    if (length < 9) { return "red"; }
    else if(length < 16) { return "orange";}
    else { return "green";};
}

const PasswordStrengthH = (props) => {

    const [input, setInput ] = useState( "" );
    const handleChange = (e) => ( setInput(e.currentTarget.value));


    return( 
        <input
            type= "password"
            style= { calculateStyle(input) }
            onChange= { handleChange }
            className= "form-control mb-3"
            value= { input }
            placeholder= "test your password safety!" 
        />
    )
}
export default PasswordStrengthH;