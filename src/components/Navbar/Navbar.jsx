import React, { useState } from 'react';
import "../../styles/components/_navbar.scss";
import Logo from "../../assets/icon/logo.svg";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const handleNavToggle = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
            <a href="/">
                <img
                    className=""
                    src={Logo}
                    alt="logo"
                />
            </a>
        </div>
        <div className={`navbar-menu ${isNavOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
                <a href="">Home</a>
            </li>
            <li className="navbar-item">
                <a href="">About</a>
                </li>
            <li className="navbar-item">
                <a href="">Skills</a>
                </li>
            <li className="navbar-item">
                <a href="">Projects</a>
                </li>
            <li className="navbar-item">
                <a href="">Contact</a>
                </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={handleNavToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;