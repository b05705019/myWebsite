import React from 'react';
import './App.css';
import Home from './Home/Home';
import Introduction from './Introduction/Introduction';
import Skill from './Skill/Skill';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Introduction />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
