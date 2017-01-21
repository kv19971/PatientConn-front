import React from 'react'

class Header extends React.Component{
    constructor(){
        super();
        this.style = {
            position: 'fixed',
            top: '0px',
            padding: '15px',
            fontSize: '40px',
            background: '#FF3333',
            color: '#F8F8FF',
            width: '100%'
        };
    }
    render(){
        return (
            <div style={this.style}>{this.props.children}</div>
        );
    }
}

export default Header;