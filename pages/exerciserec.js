import React from 'react';
import Axios from 'axios'
import SmallList from '../components/smalllist'
import Title from '../components/title'

class ExerciseRec extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ["0", "1", "2"]
        };
    }
    componentDidMount(){
        //get data and shit
    }
    render() {
        return (
            <div>
                <Title>Exercise recommendations</Title>
                <SmallList data={this.state.data} basePath="exercise"/>
            </div>
        );
    }
}

export default ExerciseRec;