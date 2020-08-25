import React, { Component } from "react";

class Paragraph extends Component{
    render() {
        let { children } = this.props;
        return(
            <p className="lead" >{ children ? children :  "Hello, world" }</p>
        );
    }
}



export default Paragraph;