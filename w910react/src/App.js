import React from 'react';
import './App.css';

import Stuff from './components/Stuff'
import StateComponents from './components/StateComponents'
import GodCounter from './components/04lifecycle/GodCounter'



function App() {
  return (
    <div className="App">
      <Stuff />
      <StateComponents />
      <GodCounter />
    </div>
  );
}

export default App; 
