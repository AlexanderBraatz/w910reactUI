import React,  { useState } from "react";

const CounterH = ({initial, max, step }) => {

    const [counter , setCounter ] = useState( initial );
    
    const Add = () => setCounter( counter + step <= max ? counter + step : counter); 
    const Minus = () => setCounter(  counter - step > 0 ? counter - step : counter) 

        
    return(
        <div className="card">
            <p>{ counter }</p>
            <button className= "btn btn-dark" onClick= { Add }>
                +
            </button>
            <button className= "btn btn-light" onClick= { Minus }>
                -
            </button>
        </div>
    )
}


CounterH.defaultProps = {
initial : 50,
max: 100,
step: 1,
}
export default CounterH;