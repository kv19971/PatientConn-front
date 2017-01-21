import React from 'react';
import { Link } from 'react-router'
import Setup from './pages/setup'
import Home from './pages/home'
import Doctor from './pages/doctor'
import Status from './pages/status'
import Perscription from './pages/perscription'
import Recommendations from './pages/recommendations'
import SleepRec from './pages/sleeprec'
import EatRec from './pages/eatrec'
import ExerciseRec from './pages/exerciserec'

import Header from './components/header'

class App extends React.Component {
   render() {
      return (
         <div>
            <Header>
                PatientConn
            </Header>
            <div id="cntnt" className="container">
                {this.props.children}
            </div>
            <div id="mainNav" className="container">
                <Link to="status"><button className="btn btn-lg btn-success col-sm-2">Status</button></Link>
                <Link to="perscription"><button className="btn btn-lg btn-success col-sm-3">Perscriptions</button></Link>
                <Link to="recommendations"><button className="btn btn-lg btn-success col-sm-4">Recommendations</button></Link>
                <Link to="doctor"><button className="btn btn-lg btn-success col-sm-3">Your Doctor</button></Link>
            </div>
         </div>
      );
   }
}

export default App;