import React, { Component } from "react";

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            i: 0,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        this.setState({ 
            i : (this.state.i + 1)% this.props.names.length,
        });
    }
    render(){
        const next = this.props.names[this.state.i];
        return(
            <button
            onClick={ this.handleClick }
            className= "btn btn-light border border-primary">
                { next }
            </button>
        )
    }

}
RollCall.defaultProps= {
    names : ["Alex","Dean","Oscar","Marta","Gilson"],
}
export default RollCall;