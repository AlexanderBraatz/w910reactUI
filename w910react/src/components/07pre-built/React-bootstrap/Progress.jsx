import React, { Component } from "react"
import ProgressBar from 'react-bootstrap/ProgressBar' //https://react-bootstrap.github.io/components/progress/
import Button from 'react-bootstrap/Button' //https://react-bootstrap.netlify.app/components/buttons/

class Progress extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            progress : 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { progress } = this.state;

        this.setState({
            progress : progress < 100 ? progress + 10 : progress,
            //         ^if value is larger than 100 stop adding 10 to it, by just setting it to itself
        })
         
    }

    render(){
        return(
            <>
                <ProgressBar 
                    now= { this.state.progress }
                    // min= { 0 } not needed as 0 and 100 are the  default, see docs
                    // max= { 100 } 
                    variant="danger"
                    animated
                    label={`${ this.state.progress }%`} srOnly 
                    className="mt-3 mb-3"/>
                <Button 
                    onClick= { this.handleClick } 
                    variant="primary" 
                    size="lg" 
                    disabled= {  this.state.progress >= 100 ? true : false  }
                    
                    >
                        More!
                </Button>
            </>
        );
    }
}



export default Progress;

/*
-start at 0
- onClick button up 10%
- if 100%
- button disabled
*/