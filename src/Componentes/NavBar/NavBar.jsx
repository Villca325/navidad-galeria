import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./EstiloNav.css";
import icono from "./logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    
<Navbar sticky="top" className="navbar w-100">
  <Container fluid className="d-flex flex-column align-items-center py-2 px-0">
    
    {/* 🔔 Fila superior: Logo a la izquierda, mensaje centrado */}
    <div className="navbar-top w-100 d-flex align-items-center position-relative mb-2">
      <Link to="/" className="navbar-brand logo-container">
        <img className="logoTienda" src={icono} alt="Logo de la Tienda" />
      </Link>
          {/* Mensaje centrado */}
          <p className="mensaje-festivo m-0 text-center">
             ¡Celebra la Navidad con nosotros! ✨
          </p>
        </div>

        {/* 🎄 Fila inferior: enlaces */}
        <Nav className="menu-horizontal">
          <a className="nav-link" href="https://www.soalpro.com/?fbclid=IwY2xjawNiSR1leHRuA2FlbQIxMABicmlkETF6Z21jZDNDWUloNG1sZE54AR6XenWG6Kab51vPxGxB1arQJz26v-6M-XRzuzosHJhSDWIupdjzxpb_ABzenA_aem_r89PamrnT4rn-CY5iQXCsw">
            Tienda
          </a>
          <a className="nav-link" href="https://www.facebook.com/SanGabrielBolivia/about?locale=es_LA">
            Contacto
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
