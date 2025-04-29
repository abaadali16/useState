import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navItems">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="navLinks">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="btn">Login</div>
    </div>
  );
}

export default Navbar;