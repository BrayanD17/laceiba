import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

const cld = new Cloudinary({
  cloud: {
    cloudName: "duivlosz8",
  },
});

export function CatalogoModal({ producto, onCerrar, formatearPrecio }) {
  if (!producto) {
    return null;
  }

  const imagen = cld
    .image(`${producto.public_id}.png`)
    .resize(fill().width(1200).height(800).gravity("auto"))
    .delivery(format("auto"))
    .quality(auto());

  return (
    <div className="modal-overlay" onClick={onCerrar}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onCerrar}>
          X
        </button>

        <AdvancedImage cldImg={imagen} alt={producto.nombre} />

        <div className="modal-caption">
          <h3>{producto.nombre}</h3>
          <p>{formatearPrecio(producto.moneda, producto.precio)}</p>
        </div>
      </div>
    </div>
  );
}
