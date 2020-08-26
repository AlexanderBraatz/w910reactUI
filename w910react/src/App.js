import React from 'react';
import './App.css';

import Stuff from './components/Stuff'
import Clicked from './components/Clicked'
import ToggleText  from './components/03state/ToggleText'
import Counter  from './components/03state/Counter'
import StepCounter  from './components/03state/StepCounter'
import CatchMeIfYouCan   from './components/03state/CatchMeIfYouCan'


function App() {
  return (
    <div className="App">
      <Stuff />
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
    </div>
  );
}

export default App; 
