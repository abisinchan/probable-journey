import React from 'react';
import '../css/Resume.css';
function Resume() {
  return (
    <div className='container'>
    <h2>My Resume</h2>
    <section>
    <div className='resume-container'>
      <div className="resume-links">
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
        
          
        </ul>
      </div>
    </div>
    </section>
    </div>
  );
}

export default Resume;
