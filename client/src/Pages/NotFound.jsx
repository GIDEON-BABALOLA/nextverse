import Astronaut from "../components/NotFound/Astronaut"
import FourZeroFour from "../components/NotFound/FourZeroFour"
import MenuBar from "../components/NotFound/MenuBar"
import Hamburger from "../components/NotFound/Hamburger"
import "../styles/components/NotFound/notfound.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
const NotFound = () => {
  return (
    <main className="notfound-body">
    <Hamburger />
    <MenuBar />
    <Container className="notfound-container">
      <Row>
        <Col md={6} className="align-self-center">
          <Astronaut />
        </Col>
        <Col md={6} className="align-self-center">
          <FourZeroFour />
        </Col>
      </Row>
    </Container>
  </main>
  )
}

export default NotFound