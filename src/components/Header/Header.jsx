import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../images/Logo.svg";
import "./header.css";

function Header() {
  return (
    <>
      <div id="header">
        <div id="logo">
          <img src={Logo} alt="logo" />
        </div>
        <Navbar id='nav'  collapseOnSelect expand="lg" id='nav' >
        <Navbar.Toggle id='toggle' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id='navlink1' >About</Nav.Link>
            <Nav.Link id='navlink2' >Services</Nav.Link>
            <Nav.Link id='navlink3' >Portfolio</Nav.Link>
            <Nav.Link id='navlink4'>Team</Nav.Link>
            <Nav.Link id='navlink5' >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
          <a href="/" id="lastli">
            <li>Contact</li>
          </a>
        </div>
      </div>
    
    </>
  );
}

export default Header;
