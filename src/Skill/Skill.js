import React from 'react';
import './Skill.css';

class Skill extends React.Component {
    render() {
        return (
            <div id="Skills" className="skill-bg">
                <div className="skill-title">
                    <div> Skills </div>
                    <div className="skill-subtitle"> Programming skills. </div>
                </div>
                <div className="skill-body">
                    <div className="web-lang-container">
                        <div className="web-title"> Web Development </div>
                        <div className="web-lang-body">
                            <div className="web-lang-element"> Vue </div>
                            <div className="web-lang-element"> Nuxt </div>
                            <div className="web-lang-element"> React </div>
                            <div className="web-lang-element"> Angular </div>
                            <div className="web-lang-element"> Node.js </div>
                            <div className="web-lang-element"> Spring(Java) </div>
                            <div className="web-lang-element"> Laravel(PHP) </div>
                        </div>
                    </div>
                    <div className="web-lang-container">
                        <div className="lang-title"> Programming Language </div>
                        <div className="web-lang-body">
                            <div className="web-lang-element"> Python </div>
                            <div className="web-lang-element"> C++/C </div>
                            <div className="web-lang-element"> Java </div>
                            <div className="web-lang-element"> R </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;