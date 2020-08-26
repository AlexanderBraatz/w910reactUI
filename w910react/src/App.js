import React from 'react';
import './App.css';

import Stuff from './components/Stuff'
import Clicked from './components/Clicked'
import ToggleText  from './components/03state/ToggleText'
import Counter  from './components/03state/Counter'


function App() {
  return (
    <div className="App">
      <Stuff />
      <Clicked />
      <ToggleText  />
      <Counter
        initial = { 50 }
        max= { 100 } />
    </div>
  );
}

export default App; 
