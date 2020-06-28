import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const OperatorFooter = (props) => {
  return (
    <div className="my-3">
      <hr />
      <Nav>
        <NavLink disabled href="#">© 2020, Build Week - FoodTrucks, TruckR.</NavLink>
      </Nav>
    </div>
  );
}

export default OperatorFooter;