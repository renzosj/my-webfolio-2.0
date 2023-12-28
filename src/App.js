import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Works from './components/Works';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const [showContact, setShowContact] = useState(false);
  const handleSetShowContact = (showContactStateBool) => {
    setShowContact(showContactStateBool);
  }

  const handleSetActiveProject = (projectIndex) => {
    setActiveProject(projectIndex);
  }

  return (
    <div>
      <Header />
      <Navbar setActiveProject={handleSetActiveProject} setShowContact={handleSetShowContact} />
      <main>
        <Bio />
        <Works activeProject={activeProject} />
        <Contact showContact={showContact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
