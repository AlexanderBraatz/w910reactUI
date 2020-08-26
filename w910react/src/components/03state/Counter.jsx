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

        if( counter + 1 <= this.props.max ){
            this.setState({
                counter: counter + 1
            })
        }

    }
    handleClickMinus() {
        const { counter } = this.state;
        if( counter - 1 >= 0 ){
            this.setState({
                counter: counter - 1
            })
        }
    }

    render() {
        return(
            <>
                <p>{ this.state.counter }</p>
                <button onClick= { this.handleClickAdd}>+</button>
                <button onClick= { this.handleClickMinus}>-</button>
            </>
        )
    }



}

Counter.defaultProps = {
    initial : 50,
    max: 100
}
//^ holds a default props object

export default Counter;