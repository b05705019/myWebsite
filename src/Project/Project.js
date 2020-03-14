import React from 'react';
import './Project.css';
import news from '../assets/news.png';
import annotation from '../assets/annotation.png';
import quote from '../assets/quote.png';
import harbor from '../assets/harbor.png';
import music from '../assets/music_chat.png';

class Project extends React.Component {
    render() {
        return (
            <div id="Projects" className="project-bg">
                <div className="project-title">
                    <div> Projects </div>
                    <div className="project-subtitle"> Projects of web designing. </div>
                </div>
                <div className="project-body">
                    <div className="project-img">
                        <div className="project-img-cover"> DeFaker </div>
                        <img src={news} alt="Defaker" />
                    </div>

                    <div className="project-img">
                        <div className="project-img-cover"> Annotation Tool </div>
                        <img src={annotation} alt="Annotation tool" />
                        
                    </div>

                    <div className="project-img">
                        <div className="project-img-cover"> Quote Cookie </div>
                        <img src={quote} alt="Quote Cookie" />
                        
                    </div>
                    
                    <div className="project-img">
                        <div className="project-img-cover"> Harbour Scheduling </div>
                        <img src={harbor} alt="Harbour Scheduling" />
                        
                    </div>

                    <div className="project-img">
                        <div className="project-img-cover"> Line Music Game </div>
                        <img className="project-app" src={music} alt="Line Music Game" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;