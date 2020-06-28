import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">CHICAGO FOOD TRUCKS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://foodtruckaf.netlify.app/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user">Trucks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Promotion</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Hello Paul | <a href="/">Log Out</a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;