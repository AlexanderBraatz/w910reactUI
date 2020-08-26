import React from 'react';
import './App.css';

import Stuff from './components/Stuff'
import Clicked from './components/Clicked'
import ToggleText  from './components/03-state/ToggleText '


function App() {
  return (
    <div className="App">
      <Stuff />
      <Clicked />
      <ToggleText  />
    </div>
  );
}

export default App; 
