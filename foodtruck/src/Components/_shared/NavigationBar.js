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

import { useLocation, Link } from 'react-router-dom';

const NavigationBar = (props) => {

  const location = useLocation();

  let href = "";

  if (location.pathname === "/auth/operator/login") {
    href = "register"
  } else if (location.pathname === "/login") {
    href = "signup"
  }

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
          { href !== "" &&
            <NavbarText><Link to={href}>Sign Up</Link></NavbarText>
          }
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;