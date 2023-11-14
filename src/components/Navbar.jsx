import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">MERCH IT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#indumentaria">Indumentaria</Nav.Link>
            <Nav.Link to="#tecnologia">Tecnología</Nav.Link>
            <Nav.Link to="#oficina">Oficina</Nav.Link>
            <Nav.Link to="#oficina">Deportes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CartWidget />
    </header>
  );
};
