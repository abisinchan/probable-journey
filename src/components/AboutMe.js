import React from "react";
import userImage from "../images/user.png";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <div className="container">
      <section className="about-me-container">
        <div className="picContainer">
          <div className="avatar">
            <img src={userImage} alt="Picture of developer Abigail" />
          </div>
        </div>

        <div className="bio"> 
        <h3>
         Hi, I'm Abigail. 
        </h3>
          <p>Pronouns: She/Her</p>
          <p>
            I'm a passionate web developer with experience in creating modern
            and interactive websites. I enjoy turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
