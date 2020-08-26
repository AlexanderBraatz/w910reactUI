import React, { Component } from "react";

class Square extends Component{
    constructor(props){
        super(props);

        this.state = {
            green : true,
        };
       
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            green : !this.state.green,
        })
    }

    render(){
        let colour = this.state.green ? "green" : this.props.colour;
        //^ this logic is up here so return can only concern itself with whats visually renderd
        //return best only contain representative variables like colour
        return ( 

            <div 
                onClick= { this.handleClick } 
                style= {{
                    height:200,
                    width:200,
                    backgroundColor: colour }} ></div>
            
        )
    }
}

   
    
    
    /* in Css ^this would be style = "height: 200px; width : 200px; backgroundColour: red;"
    this is done by react so inline style s can easily accept DOM style objects */

export default Square;