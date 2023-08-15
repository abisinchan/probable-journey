import React from 'react';
import '../css/Navigation.css'; // Import the Navigation component CSS


function Navigation({ activeSection, setActiveSection }) {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  
    return (
      <nav>
        <ul className="navigation-list">
          {sections.map((section, index) => (
            <li
              key={index}
              onClick={() => setActiveSection(section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navigation;
