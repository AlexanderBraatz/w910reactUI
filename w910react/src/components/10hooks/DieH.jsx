import React,  { useState } from "react";

const CounterH = ({ sides }) => {
    const [result, setResult] = useState(1);
    const roll = () => setResult( Math.floor(Math.random() * Math.floor(sides) + 1)); // +1 so its 1-6 not 0-5

 
    return(

        <p 
        onClick= { roll } 
        className="alert alert-primary mt-4">
             {`you rolled a ${sides} sided die and got ${result}`} 
        </p>
    )

}
    export default CounterH;