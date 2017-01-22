import React from 'react';
import Axios from 'axios'
import SmallList from '../components/smalllist'
import Title from '../components/title'
import jQuery from 'jquery'

class ExerciseRec extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    componentDidMount(){
        //get data and shit

        jQuery.get('http://13.76.189.186:80/getPatient/5884161ed950235e7ba1ac67', 
            (res)=>{
                res.addHeader("Access-Control-Allow-Origin", "*");
                return this.state.data = res["prescription"]["exercise"];}
        ).fail((e)=>{console.log(e)});
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