import React from 'react';
import './App.css';
import Home from './Home/Home';
import Introduction from './Introduction/Introduction';
import Skill from './Skill/Skill';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Experience from './Experience/Experience';

function App() {
  return (
    <div className="App">
      <Home />
      <Introduction />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
