import React from 'react';

// import dependency components
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import app components
import NavigationBar from './Components/_shared/NavigationBar';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import TruckListContainer from './Components/TruckListContainer';
import PrivateRoute from './routes/PrivateRoute';
import Operators from './Components/Operators';

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
          path="/operators"
          component={Operators}
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
