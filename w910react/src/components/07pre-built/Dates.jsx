import React, { Component } from "react";

import DatePicker from "react-datepicker"; //https://github.com/Hacker0x01/react-datepicker/
import "react-datepicker/dist/react-datepicker.css";

import Alert from 'react-bootstrap/Alert' //https://react-bootstrap.netlify.app/components/alerts/#alert-props
import Row from 'react-bootstrap/Row' //https://react-bootstrap.netlify.app/layout/grid/#row-props
import Col from 'react-bootstrap/Col' //https://react-bootstrap.netlify.app/layout/grid/#col-props

class Dates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            date1: new Date(), //  new Date() -> returns todays date atm
            date2: new Date(),
        }

        this.handlePick1 = this.handlePick1.bind(this);
        this.handlePick2 = this.handlePick2.bind(this);
       
    }

    total(){
        return( Math.floor((this.state.date2.getTime() - this.state.date1.getTime())/ 8.64e+7) ); //days
    }
   

    handlePick1(date) {
        this.setState({date1 : date }) //sets displayed date to picked date, React knows to pass the date into the onChange prop
    }

    handlePick2(date) {
        this.setState({date2 : date })
    }
    

    render() {
        const { date1, date2 } = this.state;
        return(
            <>
                <Row
                    className="mt-3 mb-3">
                    <Col>                       
                        <DatePicker
                            className="form-control"// https://getbootstrap.com/docs/4.0/components/forms/#form-controls 
                            selected={ date1 } 
                            onChange={ this.handlePick1 } />
                    </Col>
                    <Col>
                        <DatePicker
                            className="form-control" //adds same styling that is applied to input fields e.g on focus-> blue border
                            selected={ date2 } 
                            onChange={ this.handlePick2 } />
                    </Col>
                </Row>
                <Alert  
                    variant="primary">
                    { this.total() } days
                </Alert>
            </>
        )
    }



}



export default Dates;