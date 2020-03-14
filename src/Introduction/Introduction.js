import React from 'react';
import './Introduction.css';
import profilePic from '../assets/profile.png';

class Introduction extends React.Component {
    render() {
        return (
            <div id="Introduction" className="intro-bg">
                <div className="intro-title"> Introduction </div>
                <div className="intro-body-container">
                    <div className="intro-space"></div>
                    <div className="intro-body">
                        <div className="intro-picture"><img src={profilePic} /></div>
                        <div className="intro-name">Shih Yun Chen <br/> (Carolyn)</div>
                        <div className="intro-content">
                            I’m a software developer now, 
                            but interested to many other different fields. 
                            I love reading, traveling, eating, as well as singing. 
                            I am pursuing to work for making the world better. 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;