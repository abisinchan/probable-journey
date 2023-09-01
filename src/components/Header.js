import React from "react";
import Navigation from "./Navigation"; // Import the Navigation component
import "../css/Header.css";
import nameLogo from "../images/svgLogo.svg";

function Header({ activeSection, setActiveSection }) {
  return (
    <header>
<div className="header-container">
        <img src={nameLogo} alt="logo that says Abigail Sinchan with a title of Junior Developer" />
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </header>
  );
}

export default Header;
