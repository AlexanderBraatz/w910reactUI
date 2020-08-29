import React, { Component } from "react";

class Transform extends Component {

    constructor(props) {
        super(props);

        this.state= {
            input: 0,
            function: this.props.function,
        }

        this.handleChange = this.handleChange.bind(this);
        this.transform = this.transform.bind(this);
    }



    handleChange(e) {

        this.setState({
            input: e.currentTarget.value,
         });
    }
   
   
    transform() {
        return this.state.function(+this.state.input).toFixed(2);
    }
    

    render(){
        return( 

            <div 
            className="input-group mb-3"> 
                <div 
                className="input-group-prepend">
                    <span 
                    className="input-group-text">
                        { this.state.function.toString() }
                    </span>
                </div>
                <input
                    type= "number"
                    onChange= { this.handleChange}
                    className= "form-control"
                    value= { this.state.input }
                    placeholder= "transform me" 
                />
                <div 
                className="input-group-append">
                    <span 
                    className="input-group-text">
                        Result = { this.transform() }
                    </span>
                </div>   
            </div>
        )
    }
}

Transform.defaultProps= {
    function: x => +x + 1,
}

export default Transform;