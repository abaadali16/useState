import React from 'react';
import './Navbar.css';
import { NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navItems">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="navLinks">
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="btn">login</div>
    </div>
  );
}

export default Navbar;