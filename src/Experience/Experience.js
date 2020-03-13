import React from 'react';
import './Experience.css';

class Experience extends React.Component {
    render() {
        return (
           	<div className="exp-bg">
               	<div className="exp-title">
					Experience
				</div>
               	<div className="exp-body">
					<div className="exp-study">
						<div className="exp-degree exp-master">Master of Information Management</div>
						<div className="exp-degree">Bachelor of Information Management</div>
						<div className="exp-degree">Stella Matutina Girls’ High School</div>
					</div>
					<div className="exp-projects">
						<div className="exp-project exp-work"> Line Taiwan </div>
						<div className="exp-project"> 24th the International ICT Innovative Services Awards </div>
						<div className="exp-project exp-work"> Kaohsiung Harbor Smart Scheduling Information System </div>
						<div className="exp-project"> Study in Creativity and Entrepreneurship program </div>
						<div className="exp-project"> Academy Department in NTUIM Camp </div>
						<div className="exp-project"> NTU System App Creativity Contest </div>
						<div className="exp-project"> NTU Shan Fu </div>
						<div className="exp-project"> Rural Education Team in NTUIM </div>
						<div className="exp-project"> Student Association of Information Management Department </div>
						<div className="exp-project"> NTUIM Welcome Camp </div>
						<div className="exp-project exp-work"> Center for Teaching and Learning Development </div>
						<div className="exp-project"></div>
					</div>
               	</div>
           	</div>
        );
    }
}

export default Experience;

