import React, { useState } from "react";

const TempConverterH = () => {
    
    const [celcius, setCelcius ] = useState("20");
    const [ fahrenheit, setFahrenheit ] = useState("68");

    const handleChangeCtoF = (e) => {
        let { value } = e.currentTarget;
        setCelcius( value );
        setFahrenheit( `${((+value * 9/5) + 32).toFixed(2)}`); // value`s type is converted to a number only for the calculation, when saved in state the value is always a string 
    }
    const handleChangeFtoC = (e) => {
        let { value } = e.currentTarget;
        setFahrenheit( value );
        setCelcius(`${((value - 32) * 5/9).toFixed(2)}`);
    } 

    return( 
        <>
            <div 
            className="input-group mb-3"> 
                <div 
                className="input-group-prepend">
                    <span 
                    className="input-group-text">
                        Fahrenheit
                    </span>
                </div>
                <input
                    type= "number"
                    onChange= { handleChangeFtoC }
                    className= "form-control"
                    value= { fahrenheit }
                />
            </div>
            <div 
            className="input-group mb-3"> 
                <div 
                className="input-group-prepend">
                    <span 
                    className="input-group-text">
                        Celcius
                    </span>
                </div>
                <input
                    type= "number"
                    onChange= {(e) => handleChangeCtoF(e)}
                    className= "form-control"
                    value= { celcius }
                />
            </div>
        </>
    )
}

export default TempConverterH;
