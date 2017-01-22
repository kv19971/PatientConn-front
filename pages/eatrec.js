import React from 'react';
import { Link } from 'react-router'
import Title from '../components/title'
class EatRec extends React.Component {
    render() {
        return (
            <div>
            <div id="secNav" className="container">
                <div className="col-sm-6"><Link to="recommendations/eatrec/take">To Take</Link></div>
                <div className="col-sm-6"><Link to="recommendations/eatrec/avoid">To Avoid</Link></div>
            </div>
                {this.props.children}
            </div>
        );
    }
}

export default EatRec;