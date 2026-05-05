import { construirUrlImagen } from "../../sections/CatalogoHerramientas/utils/catalogoUtils";

function CatalogoCard({ item, onVerImagen, formatearPrecio }) {
  return (
    <article className="catalogo-card" key={item.id}>
      <div className="catalogo-img-wrapper">
        <img src={construirUrlImagen(item.public_id)} alt={item.nombre} />

        <button
          type="button"
          className="catalogo-overlay"
          onClick={() => onVerImagen(item)}
        >
          <span>Ver imagen</span>
        </button>
      </div>

      <div className="catalogo-card-body">
        <h3>{item.nombre}</h3>

        <p className="precio">{formatearPrecio(item.moneda, item.precio)}</p>

        <p className="cantidad">Disponibles: {item.cantidad}</p>
      </div>
    </article>
  );
}

export function CatalogoGrid({ productos, onVerImagen, formatearPrecio }) {
  return (
    <div className="catalogo-grid">
      {productos.map((item) => (
        <CatalogoCard
          key={item.id}
          item={item}
          onVerImagen={onVerImagen}
          formatearPrecio={formatearPrecio}
        />
      ))}
    </div>
  );
}
