import './QuienesSomos.css';
import fondo2 from '../../assets/images/herramientas.png';
import fondo3 from '../../assets/images/materiales_zic.png';

import {
  FaAward,
  FaTags,
  FaMapMarkerAlt,
  FaHandshake
} from 'react-icons/fa';

function QuienesSomos() {
  return (
    <section className="quienes" id="quienes-somos">
      <div className="quienes-container">
        <div className="quienes-images">
          <div className="quienes-deco deco-1"></div>
          <div className="quienes-deco deco-2"></div>

          <div className="quienes-img-small">
            <img src={fondo3} alt="Materiales de construcción" />
          </div>

          <div className="quienes-img-main">
            <img src={fondo2} alt="FerroMadera HG depósito" />

            <div className="quienes-badge">
              <span className="badge-number">100%</span>
              <span className="badge-text">Compromiso con la calidad</span>
            </div>
          </div>

          <div className="quienes-floating-card">
            <span>+ Calidad</span>
            <small>Materiales confiables para cada proyecto</small>
          </div>
        </div>

        <div className="quienes-content">
          <span className="quienes-label">¿POR QUÉ ELEGIRNOS?</span>

          <h2>Tu Socio de Confianza en Construcción</h2>

          <p>
            Somos un depósito local comprometido con atender a constructores
            y propietarios de la zona norte de Costa Rica. Nos esforzamos por
            ofrecer productos de calidad, precios justos y una atención
            personalizada en cada visita.
          </p>

          <div className="quienes-features">
            <div className="feature-item">
              <span className="feature-icon">
                <FaAward />
              </span>
              <div>
                <h4>Calidad Garantizada</h4>
                <p>Productos de marcas reconocidas y materiales certificados.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">
                <FaTags />
              </span>
              <div>
                <h4>Precios Competitivos</h4>
                <p>Las mejores tarifas de la zona sin sacrificar calidad.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4>Ubicación Estratégica</h4>
                <p>Fácil acceso en La Tigra, San Carlos.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">
                <FaHandshake />
              </span>
              <div>
                <h4>Asesoría Personalizada</h4>
                <p>Te ayudamos a elegir los materiales correctos.</p>
              </div>
            </div>
          </div>

          <a href="#contacto" className="quienes-link">
            Conoce más sobre nosotros →
          </a>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;