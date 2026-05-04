import './Galeria.css';
import fondo1 from '../../assets/images/almacen.png';
import fondo2 from '../../assets/images/stock.png';
import fondo3 from '../../assets/images/heramientas_stock.png';
import fondo4 from '../../assets/images/materiales_zic.png';
import fondo5 from '../../assets/images/maderas_almacen.png';
import fondo6 from '../../assets/images/metales_almacen.png';
import fondo7 from '../../assets/images/areas_negocio.png';
import logoCeiba from '../../assets/logo/laceibalogo.png';

const imagenes = [
  { src: fondo1, titulo: 'Nuestro Depósito', texto: 'Espacios organizados para atender mejor cada proyecto.', size: 'hero' },
  { src: fondo2, titulo: 'Materiales en Stock', texto: 'Variedad disponible para construcción.', size: 'wide' },
  { src: fondo3, titulo: 'Herramientas', texto: 'Equipo manual y eléctrico.', size: 'small' },
  { src: fondo4, titulo: 'Láminas de Zinc', texto: 'Soluciones para cubiertas.', size: 'small' },
  { src: fondo5, titulo: 'Maderas', texto: 'Maderas listas para obra.', size: 'tall' },
  { src: fondo6, titulo: 'Hierro y Metales', texto: 'Material resistente para estructuras.', size: 'small' },
  { src: fondo7, titulo: 'Área de Trabajo', texto: 'Ambiente práctico y funcional.', size: 'wide' },
];

function Galeria() {
  return (
    <section className="galeria" id="galeria">
      <div className="galeria-header">
        <span className="galeria-label">GALERÍA</span>
        <h2>Nuestros Productos en Acción</h2>
        <p>
          Conoce la calidad y variedad de materiales que tenemos disponibles
          para tu próximo proyecto de construcción.
        </p>
      </div>

      <div className="galeria-grid">
        {imagenes.map((img, index) => (
          <article
            key={index}
            className={`galeria-item galeria-${img.size}`}
          >
            <img src={img.src} alt={img.titulo} />

            <div className="galeria-overlay">
              <span className="galeria-tag galeria-logo-tag">
                <img src={logoCeiba} alt="La Ceiba" />
              </span>
              <div>
                <h3>{img.titulo}</h3>
                <p>{img.texto}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="galeria-cta">
        <a href="#contacto" className="btn-galeria">
          Solicitar productos para mi proyecto →
        </a>
      </div>
    </section>
  );
}

export default Galeria;