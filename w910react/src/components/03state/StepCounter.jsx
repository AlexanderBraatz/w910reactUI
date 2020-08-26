import React from "react";
import Counter  from './Counter'

// this component like stuf has a sub-component (Counter) int which it passes the required props
const StepCounter = ( {initial, max, step}) => {
    return(
        <Counter initial= { initial } max= { max } step= { step } />
    )
}

StepCounter.defaultProps = {
    initial : 50,
    max: 100,
    step: 5,
}
export default StepCounter;