import React from 'react'

class Subtitle extends React.Component{
    constructor(props){
        super(props);
        this.style = {
            fontSize: '40px',
            padding: '10px'
        };

    }
    render(){
        return (
            <div style={this.style}>
                {this.props.children}
            </div>
        );
    }
}

export default Subtitle;