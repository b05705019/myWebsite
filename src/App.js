import React from 'react';
import './App.css';
import Home from './Home/Home';
import Introduction from './Introduction/Introduction';

function App() {
  return (
    <div className="App">
      <Home />
      <Introduction />
      {/* <img src={shih} alt="personal image" className="home-image" /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
