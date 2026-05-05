export function CatalogoHeader({ volver, totalProductos }) {
  return (
    <div className="catalogo-header">
      <button type="button" onClick={volver} className="volver-btn">
        {"\u2190 Volver"}
      </button>

      <div>
        <span className="catalogo-label">CATALOGO</span>
        <h2>Herramientas</h2>
        <p>{totalProductos} productos encontrados</p>
      </div>
    </div>
  );
}
