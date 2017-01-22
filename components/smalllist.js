import React from 'react'

import { Link } from 'react-router'

class SmallList extends React.Component {
    constructor(props){
        super(props);
        this.ulStyle = {
            fontSize:'35px',
            margin: '30px 0',
            listStyleType: 'none',
            padding: '0'
        };
        this.liStyle = {
            margin: '20px 0',
            fontSize: 'inherit !important',
            width: '100%',
            display:'block'
        };
        if(props.warn){
            this.liStyle.background= "red !important";
        }
    }
    render() {
        return (
            <ul style={this.ulStyle}>
                {this.props.data.map((val, i) => {
                    return (<Link to={this.props.basePath + "/" + i} key={i} style={{width: '100%', display:'block'}}>
                        <button className="btn-md btn-info" style={this.liStyle}>
                            {val.company_name}
                        </button></Link>);
                })}
            </ul>
        );
    }
}
export default SmallList;

/*

*/