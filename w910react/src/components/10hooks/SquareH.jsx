import React, { useState } from "react";

const SquareH = ({colour}) =>{
   

    const [ green, setGreen ] = useState(true);
    const handleClick = () => setGreen(!green);

    let background = green  ? "green" : colour;

    return ( 

        <div 
            onClick= { handleClick } 
            style= {{
                height:200,
                width:200,
                backgroundColor: background }} >        
        </div>
    )
}

export default SquareH;