import React, { Component } from "react";

class TwoCounters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value1: 0,
            value2: 0,
        };

        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this);
       
    }
    componentDidMount(){
        document.title = this.state.value1 + this.state.value2 ;
        //^sets tab title to sum initially to show 0 after first render
    }

    componentDidUpdate (){
        document.title = this.state.value1 + this.state.value2 ;
    }
    //^updates tab title on every change of the component so on each change of the state object (value1 , value2)
    //^runs after mounting and 1st render to set up the event listener

   

   

    handle1() {
  
        this.setState({
            value1: this.state.value1 + 1,
        })

    }
    handle2() {
  
        this.setState({
            value2: this.state.value2 + 1,
        })

    }
    

    render() {
        const { value1, value2 } = this.state;

        return(
            <div className="jumbotron">
                <p>
                    <button onClick={ this.handle1 } className="btn btn-lg btn-danger">
                        +
                    </button>
                    <span className="alert alert-danger mr-2 ml-2">
                        { value1 }
                    </span>
                </p>
                <p>
                    <button onClick={ this.handle2 } className="btn btn-lg btn-success">
                        +
                    </button>
                    <span className="alert alert-success mr-2 ml-2">
                        { value2 }
                    </span>
                </p>
            </div>
        )
    }



}



export default TwoCounters;