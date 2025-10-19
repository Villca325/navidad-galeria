import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faLocationDot,
  faEnvelope,
  faPhone,

} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram,faWhatsapp } from "@fortawesome/free-brands-svg-icons";


import catGreenLeft from "./catGreenLeft.png";

const Footer = () => {
  return (
<footer className="footer pt-5 pb-3">
  <div className="cat-container">
    <img src={catGreenLeft} alt="Cat decoration" className="cat-image" />
  </div>
  <div className="container text-center text-md-start">
    <div className="row text-center text-md-start">
      {/* Oficinas */}
      <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
        <h5 className="footer-title">NUESTRAS OFICINAS</h5>
        <hr className="mb-4" />
        <p>
          <FontAwesomeIcon icon={faHouse} className="me-2" />
          <a href="#" className="footer-link">Av. Tiwanaku - YPN s.r.l.</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faUser} className="me-2" />
          <a href="#" className="footer-link">Cotacota - Oficina 666</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} className="me-2" />
          <a href="#" className="footer-link">Álamos - Oficina 001</a>
        </p>
      </div>

    
      {/* Contáctanos */}
      <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
        <h5 className="footer-title">CONTÁCTANOS</h5>
        <hr className="mb-4" />
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          <a href="#" className="footer-link">Email</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          <a href="#" className="footer-link">Teléfono</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
          <a href="#" className="footer-link">WhatsApp</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faFacebook} className="me-2" />
          <a href="#" className="footer-link">Facebook</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} className="me-2" />
          <a href="#" className="footer-link">Instagram</a>
        </p>
      </div>
    </div>

    <div className="footer-bottom mt-4">
      <p>
        🎅 © {new Date().getFullYear()} Campaña Navideña — Hecho con amor  ✨
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
