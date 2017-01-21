import React from 'react'
import Axios from 'axios'
import Title from '../components/title'

class Medication extends React.Component{
    constructor(){
        super();

        this.state = {
        };
    }
    componentDidMount(){
        //Axios.get().
    }
    render(){
        return (
        <div>
            <Title back="perscription">
                Medicine {this.props.params.id}
            </Title>
        <div>
            {this.props.params.id}
        </div></div>);
    }
}

export default Medication;