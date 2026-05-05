export function CatalogoPaginacion({ paginaActual, totalPaginas, onCambiarPagina }) {
  if (totalPaginas <= 1) {
    return null;
  }

  return (
    <div className="paginacion">
      <button
        type="button"
        disabled={paginaActual === 1}
        onClick={() => onCambiarPagina(paginaActual - 1)}
      >
        {"\u2190 Anterior"}
      </button>

      <span>
        Pagina {paginaActual} de {totalPaginas}
      </span>

      <button
        type="button"
        disabled={paginaActual === totalPaginas}
        onClick={() => onCambiarPagina(paginaActual + 1)}
      >
        {"Siguiente \u2192"}
      </button>
    </div>
  );
}
