import React from 'react';

// import dependency components
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import app components
import NavigationBar from './Components/_shared/NavigationBar';
import PrivateRoute from './routes/PrivateRoute';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Routes from './routes';
import Footer from './Components/_shared/Footer';

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
          path="/members"
          component={Routes}
        />
        <Route
          exact
          path="/login"
          component={LoginForm}
        />
        <Route
          exact
          path="/signup"
          component={SignupForm}
        />
      </Switch>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
