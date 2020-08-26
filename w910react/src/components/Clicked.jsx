import React, { Component} from "react";

class Clicked extends Component {
    constructor(){
        super();

        this.state = {
            clicked : false,
        };
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        this.setState({ clicked : true });
    }

    render() {
        return (
            <p onClick= { this.handleClick } className="alert alert-primary mt-4">{this.state.clicked ? "clicked" : "Not clicked"}</p>
        );
    }
}

export default Clicked;