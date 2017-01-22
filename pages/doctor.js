import React from 'react';
import Title from '../components/title'
import Subtitle from '../components/subtitle'
import {Link} from 'react-router'

class Doctor extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Title>Your Doctor</Title>
                <Subtitle>Name goes here</Subtitle>
                <Subtitle>Contact</Subtitle>
                <p>
                    <li>12345678</li>
                    <li>some@email.com</li>
                </p>
                <Link to="makeappt"><Subtitle>Make an Appointment</Subtitle></Link>
                <Link to="ratedoctor"><Subtitle>Rate Your Doctor</Subtitle></Link>
            </div>
        );
    }
}

export default Doctor;