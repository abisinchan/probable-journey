import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a
          href="https://github.com/abisinchan"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faGithubSquare} style={{ fontSize: "2em",color: "#c0b6ae" }} />
        </a>
        <a
          href="https://linkedin.com/in/abigailsinchan"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "2em",color: "#c6b6ae" }} />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
