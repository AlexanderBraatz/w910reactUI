import React, { Component } from "react";

class List extends Component {

    constructor(props) {
        super(props);

        this.state= {
            value : "",
            items: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); // prevent default behaviour of a button in a from
        
        this.setState({
            value : "",
            items: [...this.state.items, this.state.value],
        })
    }

    handleChange(e) {

        const { value } = e.currentTarget;

        this.setState({
            value : value,
        })
    }
    render(){

        return( 
            <>
                <button 
                    onClick= { this.handleSubmit } //react knows to pass the event object into this.handleSubmit, but this must be bound now
                    type="button" 
                    className="btn btn-secondary mb-3">
                    Add
                </button>
                <input
                    type= "text"
                    onChange= { this.handleChange }
                    className= "form-control mb-3"
                    value= { this.state.value }
                    placeholder= "add to the List" 
                />
                
                <ul className= "list-group">
                    { this.state.items.map((value, i) => (
                        <li 
                            className="list-group-item" 
                            key={ i }>
                            { value }
                        </li>
                    ))}
                    {/*^ here the array is always maped into <li>s , as component ios re-rendered when the array in state is changed, the <li>s will always reflect whats in state.items */}
                </ul>
            </>
        )
    }
}

export default List;