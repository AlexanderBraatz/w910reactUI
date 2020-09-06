import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'; // changed BrowserRouter to HashRouter for deployment on GitHub pages ,also made changes to package.json 
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

import Progress from './components/07pre-built/React-bootstrap/Progress'
import CatchMeIfYouCanPre from './components/07pre-built/React-bootstrap/CatchMeIfYouCanPre'
import PasswordStrengthPre from './components/07pre-built/React-bootstrap/PasswordStrengthPre'
import ListPre from './components/07pre-built/React-bootstrap/ListPre'
import TempConverterPre from './components/07pre-built/React-bootstrap/TempConverterPre'
import Dates from './components/07pre-built/Dates'
import Images from './components/07pre-built/Images'
import ColourHeadline from './components/07pre-built/ColourHeadline'
import ToggleTextH from './components/10hooks/ToggleTextH'


import {Clicked as Clicked2} from './components/10hooks/Clicked'
import SquareH from './components/10hooks/SquareH'
import CounterH from './components/10hooks/CounterH'
import StepCounterH from './components/10hooks/StepCounterH'
import CatchMeIfYouCanH from './components/10hooks/CatchMeIfYouCanH'
import RollCallH from './components/10hooks/RollCallH'
import PasswordStrengthH from './components/10hooks/PasswordStrengthH'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/Hooks">
            <Clicked2 />
            <SquareH colour= "hotpink" />
            <ToggleTextH initial="Hello" alternate="World" />
            <CounterH initial={ 50 } max={ 100 } />
            <StepCounterH step={ 5 }  max={ 100 } />
            <CatchMeIfYouCanH jump={ 100 } />
            <RollCallH names={ ["Alex","Dean","Oscar","Marta","Gilson"] } />
            <PasswordStrengthH />
          </Route>

          <Route exact path="/">
           <ColourHeadline message=" Click ME! - to change ME!"/>
          </Route>

          <Route  path="/pre-built" >
            <Progress />
            <CatchMeIfYouCanPre 
              jump={ 100 }/>
            <PasswordStrengthPre />
            <ListPre />
            <TempConverterPre />
            <Dates />
            <Images />
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
