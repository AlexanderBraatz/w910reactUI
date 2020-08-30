import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


import GodCounter from './components/04lifecycle/GodCounter'
import TwoCounters from './components/04lifecycle/TwoCounters'
import Length from './components/05forms/Length'
import PasswordStrength from './components/05forms/PasswordStrength'
import TempConverter from './components/05forms/TempConverter'
import List from './components/05forms/List'
import Adder from './components/05forms/Adder'
import Transform from './components/05forms/Transform'

import Header from './components/Header'
import Paragraph from './components/Paragraph'
import Square from './components/Square'
import People from './components/People'


import Clicked from './components/03state/Clicked'
import ToggleText from './components/03state/ToggleText'
import Counter from './components/03state/Counter'
import StepCounter from './components/03state/StepCounter'
import CatchMeIfYouCan from './components/03state/CatchMeIfYouCan'
import RollCall from './components/03state/RollCall'

import Footer from './components/06routing/Footer'
import FourOhFour from './components/06routing/FourOhFour'

import Progress from './components/07pre-built/Progress'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route  path="/pre-built" >
          <Progress />
        </Route>
          <Route  path="/buttons" >
            <Clicked />
            <ToggleText  />
            <CatchMeIfYouCan />
            <RollCall />
          </Route>

          <Route  path="/counters">
            <TwoCounters />
            <GodCounter />
          </Route>

          <Route  path="/lists">
            <List />
            <Adder />
          </Route>

          <Route  path="/tests">
            <Length />
            <PasswordStrength />
            <TempConverter />
          </Route>

          <Route  path="/welcome">
            <Header>Hello there!</Header>
            <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
            <Paragraph>La la la la</Paragraph>
          </Route>

          <Route  
            path="/square/:colour"
            render= { ( { match }) =>(<Square colour= { match.params.colour } /> ) }  >
          </Route >

          <Route  exact path="/square">
            <Square colour= "hotpink" />
          </Route >

          <Route  path="/maths">
            <Counter
              initial = { 90 }
              max= { 100 } 
            />
            <StepCounter 
              initial = { 60 }
              max= { 100 } 
            />
            <Transform  function= { x => x * x }/>
            <Transform  function= { x => x + x/2 }/>
            <Transform  function= { x => x - (x * x )/10 }/>
       
          </Route>
          <Route path="/steps/:max/:step"
            render={ ( { match } ) => ( <StepCounter  max= { match.params.max } step = { match.params.step } /> )}>
          </Route>
       
          <FourOhFour />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App; 
