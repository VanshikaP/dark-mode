import React, { useEffect } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const toggleMode = e => {
    e.preventDefault();
    toggleDarkMode();
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle" >
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'} onClick={toggleMode}
        />
      </div>
    </nav>
  );
};

export default Navbar;
