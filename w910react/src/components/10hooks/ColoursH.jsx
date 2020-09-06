import React, { useState } from "react";

const ColoursH = ({ colours }) => {

    const [index, setIndex ]= useState(0);
    const handleClick = () => {setIndex(( index + 1 )% colours.length)}

    return ( 

        <div 
            onClick= { handleClick } 
            style= {{
                height:"200px",
                width:"200px",
                backgroundColor: colours[index] }} >        
        </div>
    )
}
export default ColoursH;