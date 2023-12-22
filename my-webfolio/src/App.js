import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Works from './components/Works';
import Footer from './components/Footer';

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const handleSetActiveProject = (projectIndex) => {
    setActiveProject(projectIndex);
  }

  return (
    <div>
      <Header />
      <Navbar setActiveProject={handleSetActiveProject} />
      <main>
        <Bio />
        <Works activeProject={activeProject} />
      </main>
    </div>
  );
}

export default App;
