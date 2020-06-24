import React from 'react';

// import dependency components
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import app components
import NavigationBar from './Components/_shared/NavigationBar';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NavigationBar />
        </Col>
      </Row>

      <Switch>
        <Route
          exact
          path="/login"
          component={LoginForm}
        />
      </Switch>

    </Container>
  );
}

export default App;
