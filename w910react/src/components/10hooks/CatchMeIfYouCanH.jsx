import React, { useState } from "react";

const CatchMeIfYouCanH = ({ jump }) => {

    const [ yOffset , setYOffset] =  useState( 0 );

    const jumpDown = () => setYOffset( yOffset + jump);

    return(
        <button style= {{
            position:  "relative",
            top : yOffset + "px",
            
        }}
        onClick= { jumpDown }
        className= "btn btn-secondary m-3">
            Catch Me If You Can
        </button>
    )
}

CatchMeIfYouCanH.defaultProps= {
    jump: 100,
};

export default CatchMeIfYouCanH;
