import React from 'react'
import Title from '../components/title'
class Eat extends React.Component{
    constructor(props){
        super(props);
    }
            componentDidMount(){
        // axios get that shit
    }
    render(){
        return (<div>
        <Title back="recommendations/eatrec/">
             Food item {this.props.params.id}
            </Title>
            <div>
            {this.props.params.id}</div></div>);
        }
    
    }

export default Eat;
