import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './app.css';
//import './jass.css';


function App() {
  const [activeSection, setActiveSection] = useState('About Me'); // Set the initial active section

  // Render the appropriate component based on the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <body>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {renderSection()} {/* Render the active section */}
      
      <Footer /> 
    </body>
  );
}

export default App;
