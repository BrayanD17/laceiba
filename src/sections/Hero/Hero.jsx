import { useEffect, useState } from 'react';
import './Hero.css';
import fondo1 from '../../assets/images/negocio_fachada.png';
import fondo2 from '../../assets/images/cliente.png';
import fondo3 from '../../assets/images/camion.png';

const fondos = [fondo1, fondo2, fondo3];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % fondos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* Carrusel de fondos */}
      {fondos.map((fondo, index) => (
        <div
          key={index}
          className={`hero-bg ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${fondo})` }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-location">📍 La Tigra, San Carlos, Costa Rica</span>
        <h1 className="hero-title">
          Materiales de Construcción{' '}
          <span className="hero-highlight">de Calidad</span>
          <br /> a Precios Justos
        </h1>
        <p className="hero-subtitle">
          Tu depósito de confianza en la zona norte de Costa Rica. Hierro,
          madera, bloques, cemento, herramientas y más para constructores,
          contratistas y clientes particulares.
        </p>
        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">Solicitar Cotización →</a>
          <a href="#productos" className="btn-secondary">👁 Ver Productos</a>
        </div>
        <div className="hero-badges">
          <span>🚚 Delivery Local</span>
          <span>🏷 Precios Competitivos</span>
          <span>🤝 Atención Personalizada</span>
        </div>
      </div>

      {/* Indicadores */}
      <div className="hero-dots">
        {fondos.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <div className="hero-scroll">
        <p>Descubre más</p>
        <span>↓</span>
      </div>

    </section>
  );
}

export default Hero;