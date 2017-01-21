import React from 'react';
import { Link } from 'react-router'

class Recommendations extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
            <div id="secNav" className="container">
                <div className="col-sm-4"><Link to="recommendations/sleeprec">Sleep</Link></div>
                <div className="col-sm-4"><Link to="recommendations/eatrec">Eat</Link></div>
                <div className="col-sm-4"><Link to="recommendations/exerciserec">Exercise</Link></div>
            </div>
            <div>
                {this.props.children}
            </div>
            </div>
        );
    }
}

export default Recommendations;