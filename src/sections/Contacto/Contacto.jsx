import './Contacto.css';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
function Contacto() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/50683340869', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const telefono = e.target.telefono.value;
    const materiales = e.target.materiales.value;
    const mensaje = `Hola FerroMadera HG! Mi nombre es ${nombre}, mi teléfono es ${telefono}. Necesito: ${materiales}`;
    window.open(`https://wa.me/50683340869?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-container">
        <div className="contacto-left">
          <span className="contacto-label">CONTÁCTANOS</span>

          <h2>¿Listo para tu Próximo Proyecto?</h2>

          <p>
            Solicita tu cotización sin compromiso. Estamos aquí para ayudarte
            a encontrar los mejores materiales para tu construcción.
          </p>

          <button className="btn-whatsapp" onClick={handleWhatsApp}>
            <FaWhatsapp />
            Escribir por WhatsApp
          </button>

          <div className="contacto-info">
            <div className="info-item">
              <span className="info-icon brown"><FaMapMarkerAlt /></span>
              <div>
                <h4>Ubicación</h4>
                <p>La Tigra de San Carlos, Costa Rica</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon amber"><FaWhatsapp /></span>
              <div>
                <h4>WhatsApp</h4>
                <p>+506 83340869</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon gray"><FaEnvelope /></span>
              <div>
                <h4>Correo Electrónico</h4>
                <p>infoconstruccion@laceiba.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon dark-gray"><FaClock /></span>
              <div>
                <h4>Horario de Atención</h4>
                <p>Lunes a Sábado: 7:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contacto-right">
          <div className="contacto-form-card">
            <span className="form-pill">Cotización rápida</span>
            <h3>Solicitar Cotización</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre Completo</label>
                <input type="text" name="nombre" placeholder="Tu nombre" required />
              </div>

              <div className="form-group">
                <label>Correo Electrónico</label>
                <input type="email" name="correo" placeholder="tu@correo.com" />
              </div>

              <div className="form-group">
                <label>Teléfono / WhatsApp</label>
                <input type="tel" name="telefono" placeholder="+506 XXXX XXXX" required />
              </div>

              <div className="form-group">
                <label>¿Qué materiales necesitas?</label>
                <textarea
                  name="materiales"
                  placeholder="Describe los materiales, cantidades y detalles de tu proyecto..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="btn-enviar">
                <FaPaperPlane />
                Enviar Solicitud
              </button>

              <p className="form-note">
                Te responderemos a la brevedad posible con tu cotización.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;