import React from 'react';
import './Experience.css';
import myExp from './myExp.js';
import close from '../assets/close.svg';

class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projectTitle: '', 
			isOpen: false, 
			cardClass: 'exp-card-container exp-card-hide hide',
			cardTitle: '',
			cardContent: ''
		};
	}
	openProject = (event) => {
		if (this.state.isOpen) {
			this.setState({
				isOpen: false,
				cardClass: 'exp-card-container exp-card-hide'
			})
			setTimeout(()=>{
				this.setState({
					cardClass: 'exp-card-container exp-card-hide hide'
				})
			}, 400)
		}
		else {
			const title = event.currentTarget.textContent;
			const content = myExp.filter(item => item.title == title)[0].content;
			this.setState({
				isOpen: true,
				cardClass: 'exp-card-container',
				cardTitle: title,
				cardContent: content
			})
			setTimeout(()=>{
				this.setState({
					cardClass: 'exp-card-container exp-card-show'
				})
			}, 50)
		}
		console.log('event', event.currentTarget.textContent)
	}

    render() {
        return (
           	<div id="Experience" className="exp-bg">
               	<div className="exp-title">
					Experience
				</div>
               	<div className="exp-body">
					<div className="exp-study">
						<div className="exp-degree exp-master" onClick={this.openProject}>Master of Information Management</div>
						<div className="exp-degree exp-bachelor" onClick={this.openProject}>Bachelor of Information Management</div>
						<div className="exp-degree" onClick={this.openProject}>Stella Matutina Girls’ High School</div>
					</div>
					<div className="exp-projects">
						<div className="exp-project exp-work" onClick={this.openProject}>Line Taiwan</div>
						<div className="exp-project" onClick={this.openProject}>24th the International ICT Innovative Services Awards</div>
						<div className="exp-project exp-work" onClick={this.openProject}>Kaohsiung Harbor Smart Scheduling Information System</div>
						<div className="exp-project" onClick={this.openProject}>Study in Creativity and Entrepreneurship program</div>
						<div className="exp-project" onClick={this.openProject}>Academy Department in NTUIM Camp</div>
						<div className="exp-project" onClick={this.openProject}>NTU System App Creativity Contest</div>
						<div className="exp-project" onClick={this.openProject}>NTU Shan Fu</div>
						<div className="exp-project" onClick={this.openProject}>Rural Education Team in NTUIM</div>
						<div className="exp-project" onClick={this.openProject}>Student Association of Information Management Department</div>
						<div className="exp-project" onClick={this.openProject}>NTUIM Welcome Camp</div>
						<div className="exp-project exp-work" onClick={this.openProject}> Center for Teaching and Learning Development</div>
						<div className="exp-project" onClick={this.openProject}></div>
					</div>
               	</div>
				
				<div id="exp-project-card" className={this.state.cardClass}>
					<div className="exp-card">
						<div className="exp-card-body">
							<div className="exp-card-title">{this.state.cardTitle}</div>
							<div>{this.state.cardContent}</div>
						</div>
						<div className="exp-card-close" onClick={this.openProject}><img src={close}/></div>
					</div>
				</div>
           	</div>
        );
    }
}

export default Experience;

