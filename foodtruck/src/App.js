import React from 'react';

// import dependency components
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import app components
import NavigationBar from './Components/_shared/NavigationBar';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';

// import operator components
import PrivateRoute from './routes/PrivateRoute';
import ReadTrucks from './Components/crud/ReadTrucks';
import OperatorLogin from './Components/OperatorLogin';
import OperatorSignup from './Components/OperatorSignup';
import AddTruck from './Components/crud/AddTruck';
import DeleteTruck from './Components/crud/DeleleTruck';

import TruckList from "./Components/TruckList"


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NavigationBar />
        </Col>
      </Row>

      <Switch>
        <PrivateRoute
          exact
          path="/operators"
          component={ReadTrucks}
        />
        <PrivateRoute
          exact
          path="/operators/trucks"
          component={AddTruck}
        />
        <PrivateRoute
          exact
          path="/operators/:id/trucks/:truck_id"
          component={DeleteTruck}
        />
        <Route
          exact
          path="/auth/operator/login"
          component={OperatorLogin}
        />
        <Route
          exact
          path="/auth/operator/register"
          component={OperatorSignup}
        />
        <Route
          exact
          path="/login"
          component={LoginForm}
        />
        <Route
          exact
          path="/signup"
          component={SignUpForm}
        />
        <Route
          exact
          path="/diner/trucks"
          component={TruckList}
        />
      </Switch>

    </Container>
  );
}

export default App;
