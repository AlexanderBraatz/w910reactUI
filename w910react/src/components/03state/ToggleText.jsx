import React, { Component } from "react";

class ToggleText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial : true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            initial : !this.state.initial
        });
    }

    render() {
        let output = this.state.initial ? this.props.initial : this.props.alternate

        return(
            <>
                <p>{ output }</p>
                <button 
                    onClick= { this.handleClick }
                    type="button" className="btn btn-secondary m-3"
                >switch</button>
            </>
        )
    }
}
ToggleText.defaultProps = {
    initial: "Hello",
    alternate: "World"
}

export default ToggleText;