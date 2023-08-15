import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component

function Header({ activeSection, setActiveSection }) {
  return (
    <div>
      <h1>Abigail Sinchan</h1>
      {/* Place your header content here */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default Header;