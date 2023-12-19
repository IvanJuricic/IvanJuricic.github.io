import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      {/* Add your navigation links here */}
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      {/* Add more links as needed */}
    </nav>
  );
}

export default NavBar;
