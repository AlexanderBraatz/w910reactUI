import React,  { useState } from "react";

const RollCallH = ({ names }) => {

    const [index, setIndex] = useState(0);
    const next = () => {setIndex(( index + 1 )% names.length)}
    
 
    return(
        <button
        onClick={ next }
        className= "btn btn-light border border-primary m-3">
            { names[index] }
        </button>
    )
}


RollCallH.defaultProps= {
    names : ["Alex","Dean","Oscar","Marta","Gilson"],
}
export default RollCallH;