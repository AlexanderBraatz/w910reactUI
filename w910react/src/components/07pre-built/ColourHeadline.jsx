//display prop ="mesage"
//masssive letterind

// <headline onClick= { open color picker } style={ color: this.pickedcolour }

import React, { Component } from 'react';
import { BlockPicker  } from 'react-color'; //http://casesandberg.github.io/react-color/

class ColourHeadline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            colour: "#000000" ,
            showPicker : false
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({ showPicker: !this.state.showPicker });
    }

    handleChangeComplete = (color) => {
        this.setState({ colour: color.hex });
      };
       
    render() {
        let { showPicker, colour } = this.state;

        return (
            <>
            <h1
                onClick={ this.handleClick }
                className="display-1 font-weight-bold border"
                style={ {color: colour,  cursor: "pointer"} } // ->sets cursor to be a pointer cursor when the mouse is over the element 
            > 
                    { this.props.message }
            </h1>
            { showPicker ?
                <BlockPicker  
                    color={ colour }
                    onChangeComplete={ this.handleChangeComplete }
                />
            : null}
            </>
        )
    }
}

export default ColourHeadline ;