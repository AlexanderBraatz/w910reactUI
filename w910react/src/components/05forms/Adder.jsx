import React, { Component } from "react";

class Adder extends Component {

    constructor(props) {
        super(props);

        this.state= {
            value : 0,
            items: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); //  dom browserer will insue that if we have   our own method to handel the event that conflictsa are resolved sensibly e.g. preventing default before running the default methods the dom has for the event
        
        this.setState({
            value : 0,
            items: [...this.state.items, this.state.value],
        })
    }

    handleChange(e) {

        this.setState({ value : e.currentTarget.value });
    }
    //---  logic can be moved into methods , out from the render method,this should be done for readability so if there was more logic going on than a few line. this map could have stayed in render.
    makeList() {
         return this.state.items.map((value, i) => (
            <li 
                className="list-group-item" 
                key={ i }>
                { value }
            </li>
        ))
    }
    total() {
        return this.state.items.reduce((total, value) => (+total + +value),0)
    }
    //---

    render(){

        return( 
            <>
                <button 
                    onClick= { this.handleSubmit } 
                    type="button" 
                    className="btn btn-secondary mb-3">
                    Add
                </button>
                <input
                    type= "number"
                    onChange= { this.handleChange }
                    className= "form-control mb-3"
                    value= { this.state.value }
                    placeholder= "add to the List" 
                />
                
                <ul className= "list-group">
                    { this.makeList() }
                    <li 
                        style= {{ backgroundColor : "grey"}}>
                        Total : { this.total() }
                    </li>
                </ul>
            </>
        )
    }
}

export default Adder;