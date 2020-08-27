import React, { Component } from "react";

class TempConverter extends Component {
    constructor(props) {
        super(props);

        this.state= {
            celcius : 0,
            fahrenheit : 32,
        }
    }

    handleChangeCtoF(e) {
        let  value = +e.currentTarget.value; //the + causes type coercion from the valueof type string to a number(not required here but often important to prevent concatination)
        this.setState({
            celcius :  value,
            fahrenheit : ((value * 9/5) + 32).toFixed(3), // toFixed() sets decimal places
        });
    }
    handleChangeFtoC(e) {
        let  value = +e.currentTarget.value;
        this.setState({
            celcius :   ((value - 32) * 5/9).toFixed(3),
            fahrenheit :  value,
        });
    }
    render(){
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
                        onChange= {(e) => this.handleChangeFtoC(e)}
                        className= "form-control"
                        value= { this.state.fahrenheit }
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
                        onChange= {(e) => this.handleChangeCtoF(e)}
                        className= "form-control"
                        value= { this.state.celcius }
                    />
                </div>
            </>
        )
    }
}

export default TempConverter;
