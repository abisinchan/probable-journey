import React from "react";
import Navigation from "./Navigation"; // Import the Navigation component
import "../css/Header.css";

function Header({ activeSection, setActiveSection }) {
  return (
    <header>
      <div>
        <p className="nameLogo">Abigail Sinchan</p>
        <p className="titleLogo">JUNIOR WEB DEVELOPER</p>

        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </header>
  );
}

export default Header;
