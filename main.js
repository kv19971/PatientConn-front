import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import App from './App';

import Setup from './pages/setup.js'
import Doctor from './pages/doctor'
import Status from './pages/status'
import Perscription from './pages/perscription'
import Medication from './pages/medication'
import Recommendations from './pages/recommendations'
import SleepRec from './pages/sleeprec'
import Eat from './pages/eat'
import EatRec from './pages/eatrec'
import EatToTake from './pages/eattotake'
import EatToAvoid from './pages/eattoavoid'
import ExerciseRec from './pages/exerciserec'
import Exercise from './pages/exercise'
import TellFeel from './pages/tellfeel'
import Info from './pages/info'
import RateDoctor from './pages/ratedoctor'
import MakeAppt from './pages/makeappt'

ReactDOM.render((
    <Router history = {hashHistory}>
      <Route path = "/" component = {App}>
        <Route path = "setup" component = {Setup} />
        <Route path = "doctor" component = {Doctor} />
        <Route path = "status" component = {Status}>
          <IndexRoute component={TellFeel} />
          <Route path = "tellfeel" component = {TellFeel} />
          <Route path = "info" component = {Info} />        
        </Route>
        <Route path = "medication/:id" component = {Medication} />
        <Route path = "ratedoctor" component = {RateDoctor} />
        <Route path = "makeappt" component = {MakeAppt} />
        <Route path = "exercise/:id" component = {Exercise} />
        <Route path = "eat/:id" component = {Eat} />
        <Route path = "perscription" component = {Perscription} />
        <Route path = "recommendations" component = {Recommendations}>
            <IndexRoute component={SleepRec} />
            <Route path="sleeprec" component = {SleepRec} />
            <Route path="eatrec" component = {EatRec}>
              <IndexRoute component={EatToTake} />
              <Route path = "take" component = {EatToTake} />
              <Route path = "avoid" component = {EatToAvoid} />
            </Route>
            <Route path="exerciserec" component = {ExerciseRec} />
        </Route>
        
      </Route>
   </Router>
), document.getElementById('app'));