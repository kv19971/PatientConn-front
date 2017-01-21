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
import EatRec from './pages/eatrec'
import ExerciseRec from './pages/exerciserec'
import Exercise from './pages/exercise'

ReactDOM.render((
    <Router history = {hashHistory}>
      <Route path = "/" component = {App}>
        <Route path = "setup" component = {Setup} />
        <Route path = "doctor" component = {Doctor} />
        <Route path = "status" component = {Status} />
        <Route path = "medication/:id" component = {Medication} />
        <Route path = "exercise/:id" component = {Exercise} />
        <Route path = "perscription" component = {Perscription} />
        <Route path = "recommendations" component = {Recommendations}>
            <IndexRoute component={SleepRec} />
            <Route path="sleeprec" component = {SleepRec} />
            <Route path="eatrec" component = {EatRec} />
            <Route path="exerciserec" component = {ExerciseRec} />
        </Route>
        
      </Route>
   </Router>
), document.getElementById('app'));