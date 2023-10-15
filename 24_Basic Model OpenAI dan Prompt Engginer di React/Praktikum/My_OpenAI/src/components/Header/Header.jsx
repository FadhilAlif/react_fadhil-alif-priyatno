import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            MyOpenAI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/ChatBot">
                ChatBot
              </Nav.Link>
              <Nav.Link as={Link} to="/QnA">
                Q&ABot
              </Nav.Link>
              <Nav.Link as={Link} to="/ImageAI">
                ImageBot
              </Nav.Link>
              <Nav.Link
                href="https://openai.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenAI
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
