import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/skills')
      .then(response => response.json())
      .then(data => setSkills(data));
  
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;