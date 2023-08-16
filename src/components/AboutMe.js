import React from 'react';
import userImage from '../images/user.png';
import '../css/AboutMe.css'; // Import your custom CSS file

function AboutMe() {
  return (
    <div>
    <section className="about-me-container">
      <div className="avatar">
        {/* Display the developer's recent photo or avatar */}
        <img src={userImage} alt="Picture of developer Abigail" />
      </div>
      <div className="bio">
        {/* Provide a short bio about the developer */}
        <h3>Hi! I'm Abigail.</h3>
        <p>Pronouns: She/Her</p>
        <p>Current Occupation: Student FullStack Engineer</p>
        <p>
          I'm a passionate web developer with experience in creating modern and interactive websites. I enjoy
          turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
      </div>
    </section>
      </div>
  );
}

export default AboutMe;
