import React from "react";
import Navigation from "./Navigation"; // Import the Navigation component
import "../css/Header.css";

function Header({ activeSection, setActiveSection }) {
  return (
    <header>
      <div>
        <h1>Abigail Sinchan</h1>

        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </header>
  );
}

export default Header;
