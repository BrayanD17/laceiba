export function CatalogoBuscador({ busqueda, onBuscar }) {
  return (
    <div className="catalogo-buscador">
      <input
        type="text"
        placeholder="Buscar herramienta..."
        value={busqueda}
        onChange={(event) => onBuscar(event.target.value)}
      />
    </div>
  );
}
