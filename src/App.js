import React from 'react';
import './App.css';
import Header from './components/header.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Contact from './components/contact.js';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
