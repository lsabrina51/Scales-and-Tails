import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import GitHub icon
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#cat-demo">Cat Demo</a></li>
        <li><a href="#fish-demo">Fish Demo</a></li>
      </ul>
      
      <a href="https://github.com/lsabrina51/wayne_hacks.git" target="_blank" rel="noopener noreferrer" className="github-icon">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </nav>
  );
};

export default Navbar;
