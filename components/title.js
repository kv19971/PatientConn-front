import React from 'react'
import { Link } from 'react-router'

class Title extends React.Component{
    constructor(props){
        super(props);
        this.style = {
            fontSize: '60px',
            padding: '10px'
        };
        this.backStyle = {
            borderRadius: '50%',
            fontSize: '90px !important',
            marginRight: '30px'
        }

    }
    render(){
        let backbtn;
        if (this.props.back) {
            backbtn = (<Link to={this.props.back}><button className="btn btn-lg btn-primary" style={this.backStyle}>{"<"}</button></Link>);
        }else{
            backbtn = (<div></div>);
        }
        return (
            <div style={this.style}>
                {backbtn}
                {this.props.children}
            </div>
        );
    }
}

export default Title;