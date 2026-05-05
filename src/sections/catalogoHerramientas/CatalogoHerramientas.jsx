// src/components/CatalogoHerramientas.jsx
import { useMemo, useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";
import "./CatalogoHerramientas.css";

const cld = new Cloudinary({
  cloud: {
    cloudName: "duivlosz8",
  },
});

const herramientas = [
  { nombre: "Atornillador impacto inalámbrico", publicId: "atornillador_impacto_inalambrico", precio: 7000 },
  { nombre: "Compresor aire portátil", publicId: "compresor_aire_portatil", precio: 12000 },
  { nombre: "Cortadora cerámica", publicId: "cortadora_ceramica", precio: 10000 },
  { nombre: "Cortadora concreto", publicId: "cortadora_concreto", precio: 18000 },
  { nombre: "Esmeriladora angular", publicId: "esmeriladora_angular", precio: 7000 },
  { nombre: "Generador eléctrico portátil", publicId: "generador_electrico_portatil", precio: 25000 },
  { nombre: "Hidrolavadora eléctrica", publicId: "hidrolavadora_electrica", precio: 12000 },
  { nombre: "Lijadora de banda", publicId: "lijadora_banda", precio: 8000 },
  { nombre: "Lijadora orbital", publicId: "lijadora_orbital", precio: 7000 },
  { nombre: "Martillo demoledor", publicId: "martillo_demoledor", precio: 22000 },
  { nombre: "Mezclador cemento eléctrico", publicId: "mezclador_cemento_electrica", precio: 15000 },
  { nombre: "Mini esmeril Dremel", publicId: "mini_esmeril_dremel", precio: 6000 },
  { nombre: "Multiherramienta oscilante", publicId: "multiherramienta_oscilante", precio: 8000 },
  { nombre: "Pistola de calor", publicId: "pistola_calor", precio: 6000 },
  { nombre: "Pistola de clavos", publicId: "pistola_clavos", precio: 12000 },
  { nombre: "Pistola pintura eléctrica", publicId: "pistola_pintura_electrica", precio: 10000 },
  { nombre: "Pulidora eléctrica", publicId: "pulidora_electrica", precio: 9000 },
  { nombre: "Rotomartillo SDS Plus", publicId: "rotomartillo_sds_plus", precio: 12000 },
  { nombre: "Sierra caladora", publicId: "sierra_caladora", precio: 8000 },
  { nombre: "Sierra circular eléctrica", publicId: "sierra_circular_electrica", precio: 10000 },
  { nombre: "Sierra ingleteadora", publicId: "sierra_ingleteadora", precio: 15000 },
  { nombre: "Sopladora eléctrica", publicId: "sopladora_electrica", precio: 7000 },
  { nombre: "Taladro inalámbrico", publicId: "taladro_inalambrico", precio: 7000 },
  { nombre: "Vibrador concreto eléctrico", publicId: "vibrador_concreto_electrico", precio: 18000 },
];

const PRODUCTOS_POR_PAGINA = 6;

function CatalogoHerramientas({ volver }) {
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [imagenActiva, setImagenActiva] = useState(null);

  const herramientasFiltradas = useMemo(() => {
    return herramientas.filter((item) =>
      item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [busqueda]);

  const totalPaginas = Math.ceil(
    herramientasFiltradas.length / PRODUCTOS_POR_PAGINA
  );

  const productosPagina = herramientasFiltradas.slice(
    (paginaActual - 1) * PRODUCTOS_POR_PAGINA,
    paginaActual * PRODUCTOS_POR_PAGINA
  );

  const cambiarBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPaginaActual(1);
  };

  const cerrarModal = () => {
    setImagenActiva(null);
  };

  return (
    <section className="catalogo-herramientas">
      <div className="catalogo-header">
        <button type="button" onClick={volver} className="volver-btn">
          ← Volver
        </button>

        <div>
          <span className="catalogo-label">CATÁLOGO</span>
          <h2>Herramientas</h2>
          <p>{herramientasFiltradas.length} productos encontrados</p>
        </div>
      </div>

      <div className="catalogo-buscador">
        <input
          type="text"
          placeholder="Buscar herramienta..."
          value={busqueda}
          onChange={cambiarBusqueda}
        />
      </div>

      <div className="catalogo-grid">
        {productosPagina.map((item) => {
          const img = cld
            .image(item.publicId)
            .resize(fill().width(700).height(450).gravity("auto"))
            .delivery(format("auto"))
            .quality(auto());

          return (
            <article className="catalogo-card" key={item.publicId}>
              <div className="catalogo-img-wrapper">
                <AdvancedImage cldImg={img} alt={item.nombre} />

                <button
                type="button"
                className="catalogo-overlay"
                onClick={() => setImagenActiva(item)}
                >
                <span>Ver imagen</span>
                </button>
              </div>

              <div className="catalogo-card-body">
                <h3>{item.nombre}</h3>

                <p className="precio">
                   Precio: ₡{item.precio.toLocaleString("es-CR")}
                </p>
            </div>
            </article>
          );
        })}
      </div>

      {herramientasFiltradas.length === 0 && (
        <p className="sin-resultados">No se encontraron productos.</p>
      )}

      {totalPaginas > 1 && (
        <div className="paginacion">
          <button
            type="button"
            disabled={paginaActual === 1}
            onClick={() => setPaginaActual(paginaActual - 1)}
          >
            ← Anterior
          </button>

          <span>
            Página {paginaActual} de {totalPaginas}
          </span>

          <button
            type="button"
            disabled={paginaActual === totalPaginas}
            onClick={() => setPaginaActual(paginaActual + 1)}
          >
            Siguiente →
          </button>
        </div>
      )}

      {imagenActiva && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={cerrarModal}>
              ✕
            </button>

            <AdvancedImage
              cldImg={cld
                .image(imagenActiva.publicId)
                .resize(fill().width(1200).height(800).gravity("auto"))
                .delivery(format("auto"))
                .quality(auto())}
              alt={imagenActiva.nombre}
            />

            <div className="modal-caption">
              <h3>{imagenActiva.nombre}</h3>
            </div>
          </div>
        </div>
      )}
      {imagenActiva && (
    <div className="modal-overlay" onClick={() => setImagenActiva(null)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
            type="button"
            className="modal-close"
            onClick={() => setImagenActiva(null)}
        >
            ✕
        </button>

        <AdvancedImage
            cldImg={cld
            .image(imagenActiva.publicId)
            .resize(fill().width(1200).height(800).gravity("auto"))
            .delivery(format("auto"))
            .quality(auto())}
            alt={imagenActiva.nombre}
        />

        <div className="modal-caption">
            <h3>{imagenActiva.nombre}</h3>
        </div>
        </div>
    </div>
    )}
    </section>
  );
}

export default CatalogoHerramientas;