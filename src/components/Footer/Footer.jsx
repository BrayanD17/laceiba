import './Footer.css';
import logo from '../../assets/logo/laceibalogo.png';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <img src={logo} alt="La Ceiba" className="footer-logo" />

          <p>
            Tu depósito de confianza para materiales de construcción
            en la zona norte de Costa Rica. Calidad, precio y atención
            personalizada.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/50683340869" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#quienes-somos">Quiénes Somos</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Productos</h4>
          <ul>
            <li><a href="#productos">Materiales Estructurales</a></li>
            <li><a href="#productos">Cubiertas y Techos</a></li>
            <li><a href="#productos">Herramientas</a></li>
            <li><a href="#productos">Materiales de Acabado</a></li>
            <li><a href="#productos">Ver Todos</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-contact-list">
            <li>
              <span><FaMapMarkerAlt /></span>
              <p>La Tigra de San Carlos, Costa Rica</p>
            </li>
            <li>
              <span><FaWhatsapp /></span>
              <p>+506 8334-0869</p>
            </li>
            <li>
              <span><FaEnvelope /></span>
              <p>infoconstruccion@laceiba.com</p>
            </li>
            <li>
              <span><FaClock /></span>
              <p>Lun - Sáb: 7:00 AM - 5:00 PM</p>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 La Ceiba. Todos los derechos reservados.</p>

        <div className="footer-legal">
          <a href="#contacto">Cotizaciones</a>
          <a href="#productos">Productos</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;