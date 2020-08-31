import React, { Component } from "react"

import Button from 'react-bootstrap/Button' //https://react-bootstrap.netlify.app/components/buttons/

class CatchMeIfYouCanPre extends Component {
    constructor(props){
        super(props);

        this.state = {
            yOffset : 0,
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            yOffset : this.state.yOffset + this.props.jump, 
        });

    }
    render() {
      
        return(
            <Button 
            variant="danger"
            style= {{
                position:  "relative",
                top : this.state.yOffset + "px", }}
            onClick= { this.handleClick }
            className= "btn btn-secondary m-3"
            size="lg">
                You can't See ME!
            </Button>
        )
    }
}

CatchMeIfYouCanPre.defaultProps= {
    jump: 100,
};

export default CatchMeIfYouCanPre;