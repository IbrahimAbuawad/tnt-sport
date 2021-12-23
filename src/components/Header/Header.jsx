import React from "react";
import "./header.css";
import Logo from "../../images/Logo.svg";

function Header() {
  return (
    <div id="header">
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div id="links">
        <a href="/">
          <li>About</li>
        </a>
        <a href="/">
          <li>Services</li>
        </a>
        <a href="/">
          <li>Portfolio</li>
        </a>
        <a href="/">
          <li>Team</li>
        </a>
        <a href="/" id='lastli'>
          <li>Contact</li>
        </a>
      </div>
    </div>
  );
}

export default Header;
