import React, { Component } from "react";

class Length extends Component {
    constructor(props) {
        super(props)
        this.state= {
            input : "",
        }
        // this.handleChange = this.handleChange.bind(this); not needed as i use anon function on line22
    }

    handleChange(e) {
        this.setState({
            input :  e.currentTarget.value,
        })
    }
    render(){
        return( 
            <div 
            className="input-group mb-3"> 
                <div 
                className="input-group-prepend">
                    <span 
                    className="input-group-text">
                        { this.state.input.length }
                    </span>
                </div>
                <input
                    type= "text"
                    onChange= {(e) => this.handleChange(e)}
                    className= "form-control"
                    value= { this.state.input }
                    placeholder= "count me" 
                />
            </div>
        )
    }
}

export default Length;
