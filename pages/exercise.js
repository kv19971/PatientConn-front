import React from 'react'
import Axios from 'axios'
import Title from '../components/title'
class Exercise extends React.Component{
    componentDidMount(){
        // axios get that shit
    }
    render(){
        return (<div>
        <Title back="recommendations/exerciserec">
            Exercise {this.props.params.id}
        </Title>
        <div>
        {this.props.params.id}</div></div>);
    }
}

export default Exercise;