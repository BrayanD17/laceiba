import './Navbar.css';
import logo from '../../assets/logo/laceibalogo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="La Ceiba" />
        <div className="navbar-brand-text">
          <span className="brand-name">La Ceiba</span>
          <span className="brand-sub"> Materiales & Construcción</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="#quienes-somos">Quiénes Somos</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <a href="#contacto" className="navbar-cta">Obtener Cotización</a>
    </nav>
  );
}

export default Navbar;