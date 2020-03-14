import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './App.css';
import Home from './Home/Home';
import Introduction from './Introduction/Introduction';
import Skill from './Skill/Skill';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Experience from './Experience/Experience';

import menu from './assets/menu.svg';
import cancel from './assets/cancel.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      state: menu,
      navClass: 'app-navigator app-nav-hide hide'
    };
  }
  openNav = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        state: menu,
        navClass: 'app-navigator app-nav-hide'
      })
      setTimeout(()=>{
        this.setState({
          navClass: 'app-navigator app-nav-hide hide'
        })
      }, 400)
    }
    else {
      this.setState({
        isOpen: true,
        state: cancel,
        navClass: 'app-navigator'
      })
      setTimeout(()=>{
        this.setState({
          navClass: 'app-navigator app-nav-show'
        })
      }, 50)
    }
  }
  render() {
    return (
      <div className="App">
        <Home />
        <Introduction />
        <Experience />
        <Skill />
        <Project />
        <Contact />

        <div className="app-menu" onClick={this.openNav} ><img src={this.state.state} /></div>
        <div className={this.state.navClass}>
          <div className="app-nav"><AnchorLink href='#Home' onClick={this.openNav} className="anchorlink"> Home </AnchorLink></div>
          <div className="app-nav"><AnchorLink href='#Introduction' onClick={this.openNav} className="anchorlink"> Introduction </AnchorLink></div>
          <div className="app-nav"><AnchorLink href='#Experience' onClick={this.openNav} className="anchorlink"> Experience </AnchorLink></div>
          <div className="app-nav"><AnchorLink href='#Skills' onClick={this.openNav} className="anchorlink"> Skills </AnchorLink></div>
          <div className="app-nav"><AnchorLink href='#Projects' onClick={this.openNav} className="anchorlink"> Projects </AnchorLink></div>
          <div className="app-nav"><AnchorLink href='#Contact' onClick={this.openNav} className="anchorlink"> Contact </AnchorLink></div>
        </div>
      </div>
      
    );
  }
}

export default App;
