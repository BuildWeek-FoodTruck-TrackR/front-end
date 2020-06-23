import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavigationBar from './Components/_shared/NavigationBar';
import Footer from './Components/_shared/Footer';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NavigationBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="main-container">
            Your component is here!
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
