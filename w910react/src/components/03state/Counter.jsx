import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.initial
        };

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClickAdd() {
        const {counter} = this.state;
        //same as:const counter = this.state.counter;
        //^ declaring a variable with the same name as the property found in the state object will set that properties value to the variable

        if( counter + this.props.step <= this.props.max ){
            this.setState({
                counter: counter + this.props.step
            })
        }

    }
    handleClickMinus() {
        const { counter } = this.state;
        if( counter - this.props.step >= 0 ){
            this.setState({
                counter: counter - this.props.step
            })
        }
    }

    render() {
        return(
            <div className="card">
                <p>{ this.state.counter }</p>
                <button className= "btn btn-dark" onClick= { this.handleClickAdd }>
                    +
                </button>
                <button className= "btn btn-light" onClick= { this.handleClickMinus}>
                    -
                </button>
            </div>
        )
    }



}

Counter.defaultProps = {
    initial : 50,
    max: 100,
    step: 1,
}
//^ holds a default props object

export default Counter;