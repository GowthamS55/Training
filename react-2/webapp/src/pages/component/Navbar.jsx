import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>HEY</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/detail">Detail</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;