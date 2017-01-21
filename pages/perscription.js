import React from 'react';
import SmallList from '../components/smalllist';
var axios = require('axios');
import Title from '../components/title'

class Perscription extends React.Component {
    constructor() {
        super();
        this.state = {
            serverData: []
        };
    }
    componentDidMount() {
        /*this.setState({serverData: [
            {name: "Medicine A"},
            {name: "Medicine B"},
            {name: "Medicine C"} 
        ]});
        */
        axios.get("http://codepen.io/jobs.json")
        .then((res) => {
            this.setState({serverData: res.data.jobs});})
        .catch((e)=>{
            alert(e);
        });
    }
    render() {
        
        return (
            <div>
                <Title>
                    Perscriptions
                </Title>
                <SmallList data={this.state.serverData} basePath="medication"/>
            </div>
        );
    }
}

export default Perscription;