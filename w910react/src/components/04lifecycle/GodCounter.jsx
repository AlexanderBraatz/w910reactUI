import React, { Component } from "react";

class GodCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.handleClick = this.handleClick.bind(this);
       
    }
    componentDidMount(){
        window.addEventListener("click", () => this.handleClick() )
    }
    //^runs after mounting and 1st render to set up the event listener

    handleClick() {
  
        this.setState({
            counter: this.state.counter + 1,
        })

    }
    

    render() {
        return(
            <div className="card">
                <p>{ this.state.counter }</p>
                
            </div>
        )
    }



}



export default GodCounter;