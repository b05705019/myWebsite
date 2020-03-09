import React from 'react';
import './Home.css';
import arrowDown from '../assets/arrow_down.svg';
import menu from '../assets/menu.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="home-bg">
                <div className="home-container">
                    <div className="home-left">
                        <div className="home-profile-container">
                            <div className="home-name"> Carolyn Chen </div>
                            <div className="home-major"> Majored in Information Management </div>
                        </div>
                        <div className="home-intro"> This is a personal website for showing my life and interests in the past, now, and future. </div>
                    </div>
                    <div className="home-right">
                        <div className="home-rightup"><img src={menu} /></div>
                        <div className="home-rightdown"><img src={arrowDown} /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;