import React from 'react';
import './App.css';

import Stuff from './components/Stuff'
import StateComponents from './components/StateComponents'
import GodCounter from './components/04lifecycle/GodCounter'
import TwoCounters from './components/04lifecycle/TwoCounters'
import Length from './components/05forms/Length'



function App() {
  return (
    <div className="App">
      <Stuff />
      <StateComponents />
      <GodCounter />
      <TwoCounters />
      <Length />

    </div>
  );
}

export default App; 
