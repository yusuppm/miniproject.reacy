import { Col, Container, Row } from "react-bootstrap"
import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css'

function App() {
  return (
   <div>
    {/* intro section */}
    <div className='myBG'>
     <NavigationBar />
     <div className="intro">
      <Container className="text-white d-flex justify-content-center 
      align-items-center">
        <Row>
          <Col>
          <div>NONTON GRATIS GAK PAKE KARCIS</div>
          </Col>
        </Row>
      </Container>
     </div>
    </div>
    {/* end of intro */}
   </div>
  );
}

export default App;
