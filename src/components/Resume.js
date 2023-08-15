import React from 'react';

function Resume() {
  return (
    <section>
      <div className="resume-links">
        {/* Link to a downloadable resume */}
        <a href="resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>React, Redux</li>
          <li>Node.js, Express</li>
          {/* Add more proficiencies */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
