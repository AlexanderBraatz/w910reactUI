import React from 'react';
import './App.css';

import Stuff from './components/Stuff'
import StateComponents from './components/StateComponents'
import GodCounter from './components/04lifecycle/GodCounter'
import TwoCounters from './components/04lifecycle/TwoCounters'
import Length from './components/05forms/Length'
import PasswordStrength from './components/05forms/PasswordStrength'
import TempConverter from './components/05forms/TempConverter'



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
    </div>
  );
}

export default App; 
