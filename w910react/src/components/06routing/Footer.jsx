import React from "react";

import { Link } from "react-router-dom"

const Footer = () => (
  <nav className="navbar fixed-bottom navbar-expand-sm navbar-light bg-light mt-3">

  <div className=" " id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link " to="/welcome">Welcome</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/buttons">Buttons</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/counters">Counters</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link " to="/lists">Lists</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/tests">Tests</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/square">Square</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/maths">Maths</Link>
      </li>    
      <li className="nav-item">
        <Link className="nav-link " to="/pre-built">Pre-built</Link>
      </li>  
    </ul>
  </div>
</nav>
);

export default Footer; 