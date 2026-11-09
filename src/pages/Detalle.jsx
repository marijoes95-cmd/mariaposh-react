
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function Detalle() {
  const { id } = useParams()

  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let activo = true

    async function obtenerDetalle() {
      setCargando(true)
      setError(null)
      setProducto(null)

      try {
        const respuesta = await fetch(
          `https://dummyjson.com/products/${id}`
        )

        if (!respuesta.ok) {
          throw new Error('No se encontró el producto')
        }

        const datos = await respuesta.json()

        if (activo) {
          setProducto(datos)
        }
      } catch (error) {
        if (activo) {
          setError(error.message)
        }
      } finally {
        if (activo) {
          setCargando(false)
        }
      }
    }

    obtenerDetalle()

    return () => {
      activo = false
    }
  }, [id])

  return (
    <main className="detalle">
      <Link to="/catalogo" className="detalle-volver">
        ← VOLVER AL CATÁLOGO
      </Link>

      {cargando && <p>Cargando producto...</p>}

      {error && <p>{error}</p>}

      {!cargando && !error && producto && (
        <section className="detalle-contenido">
          <div className="detalle-imagen">
            <img
              src={producto.thumbnail}
              alt={producto.title}
            />
          </div>

          <div className="detalle-info">
            <span className="productos-etiqueta">
              {producto.category.toUpperCase()} / {producto.id}
            </span>

            <h2>{producto.title}</h2>

            <h3>
              US$ {producto.price.toFixed(2)}
            </h3>

            <div className="detalle-linea"></div>

            <p>{producto.description}</p>

            <Link to="/catalogo" className="detalle-boton">
              SEGUIR EXPLORANDO
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}

export default Detalle
