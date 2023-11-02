import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="minhaNavbar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link className="link" href="/quem-eu-sou">Quem eu sou</Nav.Link>
            <Nav.Link className="link" href="/projetos">Projetos</Nav.Link>
            <Nav.Link className="link" href="/cliente">Cliente</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;