import React from 'react';
import { Link } from 'react-router'
import Title from '../components/title'
class Status extends React.Component {
    constructor() {
        super();
    }
    /*
        todo 

    */
   
    render() {
        return (<div>
            <div id="secNav" className="container">
                <div className="col-sm-6"><Link to="status/tellfeel">How are you feeling</Link></div>
                <div className="col-sm-6"><Link to="status/info">Information</Link></div>
            </div>
                {this.props.children}
            </div>
            );
    }
}

export default Status;