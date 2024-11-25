import React from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css'
const Navbar = ({setSearch}) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="navbar-links">
          <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
          <div><Link to="/contact">Contact</Link></div>
          <Link to="/cart" style={{color:"red"}}>Cart ({cartCount})</Link>
          <input type="search" onChange={(e)=>setSearch(e.target.value)}/>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
