import './Productos.css';
import { FaFaucet, FaHammer  } from 'react-icons/fa';
import { useState } from "react";
import CatalogoHerramientas from "../catalogoHerramientas/CatalogoHerramientas";
const categorias = [
  {
    tipoIcono: 'blocks',
    titulo: 'Materiales Estructurales',
    descripcion: 'Hierro, madera, bloques, cemento y más para la base de tu proyecto.',
    color: 'brown'
  },
  {
    tipoIcono: 'house',
    titulo: 'Cubiertas y Techos',
    descripcion: 'Láminas de zinc, tejas y accesorios para todo tipo de cubiertas.',
    color: 'amber'
  },
  {
    tipoIcono: 'wrench',
    titulo: 'Herramientas',
    descripcion: 'Herramientas manuales y eléctricas de marcas reconocidas.',
    color: 'gray'
  },
  {
    tipoIcono: 'paint',
    titulo: 'Materiales de Acabado',
    descripcion: 'Pintura, pisos, azulejos y productos para finalizar tu proyecto.',
    color: 'brown'
  },
  {
    tipoIcono: 'faucet',
    titulo: 'Fontanería y Electricidad',
    descripcion: 'Tuberías, cables, interruptores y todo para instalaciones básicas.',
    color: 'amber'
  },
  {
    tipoIcono: 'screw',
    titulo: 'Tornillería y Accesorios',
    descripcion: 'Tornillos, clavos, anclajes y fijaciones para todo proyecto.',
    color: 'gray'
  }
];

function ProductoIcono({ tipo, color }) {
  return (
    <span className={`producto-icono icono-${color} icono-${tipo}`}>
      {tipo === 'blocks' && (
        <svg viewBox="0 0 90 80" className="svg-icon truck-icon">
          <rect className="truck-shadow" x="15" y="59" width="58" height="4" rx="2" />

          <g className="truck-body">
            <rect className="truck-bed" x="15" y="37" width="38" height="17" rx="3" />
            <path className="truck-cabin" d="M53 31 H66 L75 42 V54 H53 Z" />
            <path className="truck-window" d="M59 35 H65 L70 42 H59 Z" />
            <rect className="truck-bumper" x="72" y="49" width="5" height="5" rx="1" />

            <circle className="wheel-outer" cx="27" cy="56" r="7" />
            <circle className="wheel-inner" cx="27" cy="56" r="3" />
            <circle className="wheel-outer" cx="61" cy="56" r="7" />
            <circle className="wheel-inner" cx="61" cy="56" r="3" />
          </g>

          <g className="truck-cargo">
            <rect className="cargo cargo-1" x="20" y="25" width="13" height="10" rx="1.5" />
            <rect className="cargo cargo-2" x="34" y="25" width="13" height="10" rx="1.5" />
            <rect className="cargo cargo-3" x="27" y="14" width="13" height="10" rx="1.5" />
          </g>
        </svg>
      )}

      {tipo === 'house' && (
        <svg viewBox="0 0 80 80" className="svg-icon">
          <path className="roof" d="M16 38 L40 17 L64 38" />
          <rect className="house-wall" x="23" y="36" width="34" height="28" rx="3" />
          <rect className="door" x="36" y="45" width="10" height="19" rx="1" />
          <circle className="door-knob" cx="44" cy="55" r="1.2" />
        </svg>
      )}

      {tipo === 'wrench' && (
        <svg viewBox="0 0 100 80" className="svg-icon saw-icon">
          <rect className="wood-piece" x="12" y="58" width="76" height="10" rx="2" />
          <path className="wood-line" d="M18 63 H82" />
          <path className="wood-cut" d="M62 58 L55 68" />

          <g className="saw-body">
            <path
              className="saw-cover"
              d="M24 54 C25 34 43 20 62 27 C76 32 84 43 82 54 Z"
            />

            <path
              className="saw-top"
              d="M36 32 C40 18 61 17 66 32"
            />

            <rect className="saw-handle" x="43" y="20" width="23" height="10" rx="5" />

            <circle className="saw-blade-bg" cx="55" cy="54" r="18" />

            <path
              className="blade-teeth"
              d="M55 34
              L59 42 L67 38 L65 47 L74 49 L66 54
              L74 59 L65 61 L67 70 L59 66 L55 74
              L51 66 L43 70 L45 61 L36 59 L44 54
              L36 49 L45 47 L43 38 L51 42 Z"
            />

            <circle className="blade-center" cx="55" cy="54" r="5" />

            <rect className="saw-base" x="20" y="54" width="66" height="6" rx="2" />
          </g>

          <g className="sawdust">
            <circle className="dust dust-1" cx="78" cy="58" r="1.7" />
            <circle className="dust dust-2" cx="83" cy="62" r="1.4" />
            <circle className="dust dust-3" cx="86" cy="56" r="1.3" />
          </g>
        </svg>
      )}

      {tipo === 'paint' && (
        <svg viewBox="0 0 100 80" className="svg-icon paint-icon">

          {/* pared */}
          <rect className="wall" x="18" y="20" width="64" height="40" rx="4" />

          {/* pintura aplicada */}
          <rect className="paint-fill" x="32" y="26" width="32" height="0" rx="4" />

          {/* rodillo */}
          <g className="roller">
            <rect className="roller-head" x="32" y="26" width="32" height="12" rx="4" />
            <path className="roller-arm" d="M64 32 L74 42 L66 50" />
            <path className="roller-handle" d="M66 50 L58 66" />
          </g>

          {/* gotas */}
          <g className="paint-drops">
            <circle className="drop drop-1" cx="28" cy="64" r="2" />
            <circle className="drop drop-2" cx="38" cy="68" r="1.8" />
          </g>

        </svg>
      )}

      {tipo === 'faucet' && (
        <span className="faucet-wrapper">
          <FaFaucet className="faucet-lucide" />
          <span className="faucet-drop"></span>
        </span>
      )}

      {tipo === 'screw' && (
        <span className="hammer-scene">
          <FaHammer className="hammer-icon-react" />
          <span className="wood-base"></span>
          <span className="nail-head"></span>
          <span className="nail-body"></span>
          <span className="impact-ring"></span>
        </span>
      )}
    </span>
  );
}

function Productos() {
  const [mostrarCatalogo, setMostrarCatalogo] = useState(false);

  if (mostrarCatalogo) {
    return <CatalogoHerramientas volver={() => setMostrarCatalogo(false)} />;
  }

  return (
    <section className="productos" id="productos">
      <div className="productos-header">
        <span className="productos-label">NUESTROS PRODUCTOS</span>
        <h2>Todo lo que Necesitas para Construir</h2>
        <p>
          Ofrecemos una amplia variedad de materiales de construcción de calidad para proyectos
          residenciales y comerciales en la zona norte.
        </p>
      </div>

      <div className="productos-grid">
        {categorias.map((cat, index) => (
          <div className={`producto-card card-${cat.tipoIcono}`} key={index}>
            <ProductoIcono tipo={cat.tipoIcono} color={cat.color} />
            <h3>{cat.titulo}</h3>
            <p>{cat.descripcion}</p>

            {cat.titulo === "Herramientas" ? (
              <button
                className="producto-link producto-btn"
                onClick={() => setMostrarCatalogo(true)}
              >
                Ver productos →
              </button>
            ) : (
              <a href="#contacto" className="producto-link">
                Ver productos →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;