import React, { Component } from "react";

import InputGroup from 'react-bootstrap/InputGroup' //https://react-bootstrap.netlify.app/components/input-group/
import FormControl from 'react-bootstrap/FormControl' //https://react-bootstrap.netlify.app/components/forms/#form-control-feedback-props

class PasswordStrengthPre extends Component {
    constructor(props) {
        super(props)
        this.state= {
            input : "",
            colour : ""
        }

    }

    handleChange(e) {


        let colour; 

        const { value } = e.currentTarget;


        if (value.length < 9) { colour = "red"}
        else if(value.length < 16) { colour = "orange"}
        else { colour = "green"};


        this.setState({
            input : value,
            colour : colour,
        })
    }
    render(){
        return( 
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text
                    id="basic-addon1">Password:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    as="input"
                    type= "password"
                    style= {{
                        backgroundColor : this.state.colour,
                    }}
                    onChange= {(e) => this.handleChange(e)}
                    placeholder="test your password safety!"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    size="lg"
                />
            </InputGroup>
        )
    }
}

export default PasswordStrengthPre;