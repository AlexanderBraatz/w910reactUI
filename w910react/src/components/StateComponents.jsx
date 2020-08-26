import React from "react";

import Clicked from './03state/Clicked'
import ToggleText from './03state/ToggleText'
import Counter from './03state/Counter'
import StepCounter from './03state/StepCounter'
import CatchMeIfYouCan from './03state/CatchMeIfYouCan'
import RollCall from './03state/RollCall'


const StateComponents = () => (
    <>
      <Clicked />
      <ToggleText  />
      <Counter
        initial = { 90 }
        max= { 100 } 
      />
      <StepCounter 
        initial = { 60 }
        max= { 100 } 
      />
      <CatchMeIfYouCan />
      <br />
      <RollCall />
    </>
)
export default StateComponents;