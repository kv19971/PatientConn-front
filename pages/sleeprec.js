import React from 'react';
import Title from '../components/title'
import Subtitle from '../components/subtitle'

class SleepRec extends React.Component {
    render() {
        return (
            <div>
            <Title>Sleep</Title>
            <Subtitle>
                You need to sleep for at least 8 hours a day
            </Subtitle>
            <p>According to data collected from your FitBit you have bla bla bla</p>
            <Subtitle>
                Comments by your doctor
            </Subtitle>
            <p>
                Comments go here
            </p>
            </div>
        );
    }
}

export default SleepRec;