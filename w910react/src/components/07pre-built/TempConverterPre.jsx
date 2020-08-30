import React, { Component } from "react";

import InputGroup from 'react-bootstrap/InputGroup' //https://react-bootstrap.netlify.app/components/input-group/
import FormControl from 'react-bootstrap/FormControl' //https://react-bootstrap.netlify.app/components/forms/#form-control-feedback-props

class TempConverterPre extends Component {
    constructor(props) {
        super(props);

        this.state= {
            celcius : 0,
            fahrenheit : 32,
        }
    }

    handleChangeCtoF(e) {
        let  value = +e.currentTarget.value; //the + causes type coercion from the valueof type string to a number(not required here but often important to prevent concatination)
        this.setState({
            celcius :  value,
            fahrenheit : ((value * 9/5) + 32).toFixed(3), // toFixed() sets decimal places
        });
    }
    handleChangeFtoC(e) {
        let  value = +e.currentTarget.value;
        this.setState({
            celcius :   ((value - 32) * 5/9).toFixed(3),
            fahrenheit :  value,
        });
    }
    render(){
        return( 
            <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text
                    id="basic-addon1">Fahrenheit:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    as="input"
                    type= "number"
                    onChange= {(e) => this.handleChangeFtoC(e)}
                    value= { this.state.fahrenheit }
                    size="lg"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text
                    id="basic-addon1">Celcius:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    as="input"
                    type= "number"
                    onChange= {(e) => this.handleChangeCtoF(e)}
                    value= { this.state.celcius }
                    size="lg"
                />
            </InputGroup>
            </>
        )
    }
}

export default TempConverterPre;
