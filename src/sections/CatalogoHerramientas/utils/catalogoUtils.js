import { CLOUDINARY_BASE_URL } from "./catalogoConstants";

export function filtrarHerramientas(herramientas, busqueda) {
  const termino = busqueda.trim().toLowerCase();

  if (!termino) {
    return herramientas;
  }

  return herramientas.filter((item) =>
    item.nombre?.toLowerCase().includes(termino)
  );
}

export function formatearPrecio(moneda, precio) {
  return `${moneda}${Number(precio).toLocaleString("es-CR")} / dia`;
}

export function construirUrlImagen(publicId) {
  return `${CLOUDINARY_BASE_URL}/${publicId}.png`;
}
