import React, {Component} from "react";

class CatchMeIfYouCan extends Component {
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
            <button style= {{
                position:  "relative",
                top : this.state.yOffset + "px",
                
            }}
            onClick= { this.handleClick }
            className= "btn btn-secondary">
                Catch Me If You Can
            </button>
        )
        }
}

CatchMeIfYouCan.defaultProps= {
    jump: 100,
};

export default CatchMeIfYouCan;
