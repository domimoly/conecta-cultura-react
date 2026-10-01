import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navegacion() {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" >
      <Container>
        <NavLink className="nav-link text-white" to="/">Conecta Cultura :3</NavLink>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/actividades">Actividades</NavLink>
            <NavLink className="nav-link" to="/admin/actividades">Administración</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;

/* <NavLink className="nav-link text-white" to="/">Conecta Cultura</NavLink>
   El color del menú correspondiente a "Conecta Cultura" se cambió a color blanco :3
*/