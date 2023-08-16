import React from 'react';
import '../css/Resume.css';
function Resume() {
  return (
    <section>
      <div className="resume-links">
        <h2>My Resume</h2>
        <a href="/asinchanResume.docx" download>
          Download Resume
        </a>
      </div>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Node.js, Express</li>
          <li>MySql and Sequilize ORM </li>
          <li>MongoDB</li>
          <li>React</li>
        
          {/* Add more proficiencies */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
