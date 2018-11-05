import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavBar = () => (

  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">InvestApp</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/prices">Prices</NavItem>
    </Nav>
  </Navbar>

)

export default NavBar;
