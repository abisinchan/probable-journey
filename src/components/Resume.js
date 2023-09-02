import React from "react";
import "../css/Resume.css";
import resume from "../pdfs/abigailsinchan.pdf";

function Resume() {
  return (
    <div className="container">
      <section>
        <div className="resume-container">
         
            <form
              method="get"
              action={resume}
              target="_blank"
              className="download-button-container"
            >
              <div className="button-container">
                <h3>Click to download my resume!</h3>
              <button className="button" type="submit">
                <span className="button__text">Download</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    id="bdd05811-e15d-428c-bb53-8661459f9307"
                    data-name="Layer 2"
                    className="svg"
                  >
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </button>
              </div>

            </form>
         
          <div className="proficiencies">
            <h3>Proficiencies</h3>
            <ul>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Node.js, Express</li>
              <li>MySql and Sequelize ORM</li>
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
