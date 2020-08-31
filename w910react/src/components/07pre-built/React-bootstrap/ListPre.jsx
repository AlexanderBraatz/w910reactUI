import React, { Component } from "react";

import InputGroup from 'react-bootstrap/InputGroup' //https://react-bootstrap.netlify.app/components/input-group/#input-group-props
import FormControl from 'react-bootstrap/FormControl' //https://react-bootstrap.netlify.app/components/forms/#form-control-feedback-props
import Button from 'react-bootstrap/Button' //https://react-bootstrap.netlify.app/components/buttons/
import ListGroup from 'react-bootstrap/ListGroup' //https://react-bootstrap.netlify.app/components/list-group/#list-group-props

class ListPre extends Component {

    constructor(props) {
        super(props);

        this.state= {
            value : "",
            items: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); // prevent default behaviour of a button in a from
        
        this.setState({
            value : "",
            items: [...this.state.items, this.state.value],
        })
    }

    handleChange(e) {

        const { value } = e.currentTarget;

        this.setState({
            value : value,
        })
    }
    render(){

        return( 
            <>
                 <InputGroup className="mb-3">
                    <FormControl
                        onChange= { this.handleChange }
                        value= { this.state.value }
                        placeholder="Add to Your List"
                        aria-label="Recipient's list item"
                        aria-describedby="basic-addon2"
                        size="lg"
                    />
                    <InputGroup.Append>
                        <Button 
                            variant="outline-secondary"
                            onClick= { this.handleSubmit } >
                                Add
                        </Button>
                    </InputGroup.Append>
                </InputGroup>

                <ListGroup>
                    { this.state.items.map((value, i) => (
                        <ListGroup.Item 
                            // className="list-group-item" 
                            variant="success"
                            key={ i }>
                                { value }
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </>
        )
    }
}

export default ListPre;