
import { Link } from 'react-router-dom'

function ProductCard({ producto }) {
  const precioFormateado =
    producto.moneda === 'USD'
      ? `US$ ${producto.precio.toFixed(2)}`
      : `Gs. ${producto.precio.toLocaleString('es-PY')}`

  const esProductoAPI = producto.moneda === 'USD'

  return (
    <article className="product-card">
      <div className="product-card-imagen">
        <img
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>

      <div className="product-card-info">
        <span className="product-card-categoria">
          {producto.categoria}
        </span>

        <h3>{producto.nombre}</h3>

        <p className="product-card-precio">
          {precioFormateado}
        </p>

        <Link
          to={
            esProductoAPI
              ? `/producto/${producto.id}`
              : '/catalogo'
          }
        >
          {esProductoAPI
            ? 'VER DETALLES'
            : 'EXPLORAR CATÁLOGO'}
        </Link>
      </div>
    </article>
  )
}

export default ProductCard

