import React, { Component } from "react";

class PasswordStrength extends Component {
    constructor(props) {
        super(props)
        this.state= {
            input : "",
            colour : ""
        }

    }

    handleChange(e) {
    // declaring variables

        let colour; 
        // let { colour } = this.state; <-- shows what colour will hold , but its not neded here as the color change is independent of the previous state.
        const { value } = e.currentTarget;
    // logic

        if (value.length < 9) { colour = "red"}
        else if(value.length < 16) { colour = "orange"}
        else { colour = "green"};
    //setting state

        this.setState({
            input : value,
            colour : colour,
        })
    }
    render(){
        return( 
            <input
                type= "password"
                style= {{
                    backgroundColor : this.state.colour,
                }}
                onChange= {(e) => this.handleChange(e)}
                className= "form-control mb-3"
                value= { this.state.input }
                placeholder= "test your password safety!" 
            />
        )
    }
}

export default PasswordStrength;