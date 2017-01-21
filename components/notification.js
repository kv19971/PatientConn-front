import React from 'react'

class Notification extends React.Component{
    constructor(props){
        super(props);
        this.style = {};
    }
    render(){
        if(this.props.type == 'w'){
            this.style.background = "red";
        }else{
            this.style.background = "white";
        }
        return (<div style={this.props.style}>
            {this.props.text}
        </div>);
    }
}