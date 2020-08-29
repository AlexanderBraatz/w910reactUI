import React from 'react';
import './App.css';

import Stuff from './components/Stuff'
import StateComponents from './components/StateComponents'
import GodCounter from './components/04lifecycle/GodCounter'
import TwoCounters from './components/04lifecycle/TwoCounters'
import Length from './components/05forms/Length'
import PasswordStrength from './components/05forms/PasswordStrength'
import TempConverter from './components/05forms/TempConverter'
import List from './components/05forms/List'
import Adder from './components/05forms/Adder'
import Transform from './components/05forms/Transform'



function App() {
  return (
    <div className="App">
      <Stuff />
      <StateComponents />
      <GodCounter />
      <TwoCounters />
      <Length />
      <PasswordStrength />
      <TempConverter />
      <List />
      <Adder />
      <br></br>
      <Transform  function= { x => x * x }/>
      <Transform  function= { x => x + x/2 }/>
      <Transform  function= { x => x - (x * x )/10 }/>
    </div>
  );
}

export default App; 
