import React from 'react';
import '../css/Footer.css'; // Import your custom CSS file

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://github.com/abisinchan" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/abigailsinchan" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add links to other platforms (Stack Overflow, Twitter, etc.) */}
      </div>
    </footer>
  );
}

export default Footer;
