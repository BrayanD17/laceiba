import { useMemo, useState } from "react";
import { useHerramientas } from "./hooks/useHerramientas";
import { PRODUCTOS_POR_PAGINA } from "./utils/catalogoConstants";
import { filtrarHerramientas, formatearPrecio } from "./utils/catalogoUtils";
import { CatalogoHeader } from "../../components/Catalogo/CatalogoHeader";
import { CatalogoBuscador } from "../../components/Catalogo/CatalogoBuscador";
import { CatalogoGrid } from "../../components/Catalogo/CatalogoGrid";
import { CatalogoPaginacion } from "../../components/Catalogo/CatalogoPaginacion";
import { CatalogoModal } from "../../components/Catalogo/CatalogoModal";
import "./CatalogoHerramientas.css";

function CatalogoHerramientas({ volver }) {
  const { herramientas, cargando, error } = useHerramientas();
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [imagenActiva, setImagenActiva] = useState(null);

  const herramientasFiltradas = useMemo(
    () => filtrarHerramientas(herramientas, busqueda),
    [herramientas, busqueda]
  );

  const totalPaginas = Math.ceil(
    herramientasFiltradas.length / PRODUCTOS_POR_PAGINA
  );

  const productosPagina = useMemo(() => {
    const indiceInicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
    const indiceFin = paginaActual * PRODUCTOS_POR_PAGINA;
    return herramientasFiltradas.slice(indiceInicio, indiceFin);
  }, [herramientasFiltradas, paginaActual]);

  const cambiarBusqueda = (nuevoValor) => {
    setBusqueda(nuevoValor);
    setPaginaActual(1);
  };

  if (cargando) {
    return (
      <section className="catalogo-herramientas">
        <p className="estado-catalogo">Cargando productos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="catalogo-herramientas">
        <p className="estado-catalogo error-catalogo">
          Error al cargar productos: {error}
        </p>
      </section>
    );
  }

  return (
    <section className="catalogo-herramientas">
      <CatalogoHeader
        volver={volver}
        totalProductos={herramientasFiltradas.length}
      />

      <CatalogoBuscador busqueda={busqueda} onBuscar={cambiarBusqueda} />

      <CatalogoGrid
        productos={productosPagina}
        onVerImagen={setImagenActiva}
        formatearPrecio={formatearPrecio}
      />

      {herramientasFiltradas.length === 0 && (
        <p className="sin-resultados">No se encontraron productos.</p>
      )}

      <CatalogoPaginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        onCambiarPagina={setPaginaActual}
      />

      <CatalogoModal
        producto={imagenActiva}
        onCerrar={() => setImagenActiva(null)}
        formatearPrecio={formatearPrecio}
      />
    </section>
  );
}

export default CatalogoHerramientas;
