import React, { Component } from 'react';
import { Nav, Navbar, Jumbotron, Button, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar default collapseonselect className="header-rtech">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">RTech IT Solutions</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Home
    </NavItem>
          <NavItem eventKey={2} href="#">
            About Us
    </NavItem>
          <NavDropdown eventKey={3} title="Work" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Projects</MenuItem>
            <MenuItem eventKey={3.2}>Clients</MenuItem>
          </NavDropdown>
          <NavItem eventKey={4} href="#">
            Blog
    </NavItem>
          <NavItem eventKey={5} href="#">
            Contact Us
    </NavItem>

        </Nav>
      </Navbar>
    );
  }
}

export default Header;