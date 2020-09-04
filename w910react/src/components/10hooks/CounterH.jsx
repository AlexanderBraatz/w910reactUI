import React,  { useState } from "react";

const CounterH = ({initial, max }) => {

    const [counter , setCounter ] = useState( initial );
    
    const Add = () => setCounter( 
        counter < max ? counter + 1 : counter
    ); 
    
    const Minus = () => setCounter(  counter > 0 ? counter - 1 : counter) 

        
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
}
export default CounterH;