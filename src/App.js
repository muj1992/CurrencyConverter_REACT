import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Converter from './components/Converter';
import './App.css';
import Rates from './components/Rates';

function App() {
  return (
    <>
    <Container fluid="md">
      <br/>
      <Row>
        <Col>
           <Converter/>
        </Col>
      </Row>
    </Container>
     </>
    
  );
}

export default App;
