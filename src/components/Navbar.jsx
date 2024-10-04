import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/music">MUSIC</Link>
        <Link to="/videos">VIDEOS</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/signup">SIGN UP</Link>
      </div>
      <div className="navbar-center">
        <Link to="/">ACIE BABYY</Link>
      </div>
    </nav>
  );
};

export default Navbar;
