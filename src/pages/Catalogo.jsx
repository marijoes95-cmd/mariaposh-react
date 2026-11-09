
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useProductos from '../hooks/useProductos'
import ProductCard from '../components/ProductCard'

const categorias = [
  {
    nombre: 'Maquillaje',
    categoria: 'beauty',
    imagen: '/images/labial.jpeg',
  },
  {
    nombre: 'Fragancias',
    categoria: 'fragrances',
    imagen: '/images/perfume.jpeg',
  },
  {
    nombre: 'Skincare',
    categoria: 'skin-care',
    imagen: '/images/serum.jpeg',
  },
]

const filtros = [
  ['todos', 'TODOS'],
  ['beauty', 'MAQUILLAJE'],
  ['fragrances', 'FRAGANCIAS'],
  ['skin-care', 'SKINCARE'],
]

function Catalogo() {
  const { productos, cargando, error } = useProductos()

  const [searchParams] = useSearchParams()

  const verCategorias =
    searchParams.get('ver') === 'categorias'

  const categoriaDesdeURL = searchParams.get('categoria')

  const [busqueda, setBusqueda] = useState('')

const [categoria, setCategoria] = useState('todos')

const categoriaActiva = categoriaDesdeURL || categoria

  // Buscar y filtrar productos
  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.title
      .toLowerCase()
      .includes(busqueda.toLowerCase())
      
const coincideCategoria =
  categoriaActiva === 'todos' ||
  producto.category === categoriaActiva

    return coincideBusqueda && coincideCategoria
  })

  // Seleccionar una tarjeta de categoría
  function seleccionarCategoria(nuevaCategoria) {
    setCategoria(nuevaCategoria)

    document
      .getElementById('productos-catalogo')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <main className="catalogo">
      <span className="productos-etiqueta">
        THE BEAUTY EDIT / 02
      </span>

      <h2 className="catalogo-titulo">
        {verCategorias
          ? 'Universos de belleza.'
          : 'Objetos de deseo.'}
      </h2>

      <p className="catalogo-descripcion">
        Descubrí una selección de productos para hacer de
        tu rutina algo extraordinario.
      </p>

      {/* TARJETAS DE CATEGORÍAS */}
      {verCategorias && (
        <section className="categorias-seccion">
          <div className="categorias-grid">
            {categorias.map((item) => (
              <button
                type="button"
                key={item.categoria}
                className="categoria-card"
                onClick={() =>
                  seleccionarCategoria(item.categoria)
                }
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                />
                <span>{item.nombre}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* BUSCADOR Y FILTROS */}
      <div className="catalogo-controles">
        <input
          type="text"
          placeholder="Buscar productos..."
          aria-label="Buscar productos"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="catalogo-filtros">
          {filtros.map(([valor, etiqueta]) => (
            <button
              key={valor}
              type="button"
              className={
                categoria === valor ? 'activo' : ''
              }
              onClick={() => setCategoria(valor)}
            >
              {etiqueta}
            </button>
          ))}
        </div>
      </div>

      {/* ESTADOS DE LA API */}
      {cargando && <p>Cargando productos...</p>}

      {error && (
        <p role="alert">
          No pudimos cargar los productos: {error}
        </p>
      )}

      {/* GRILLA DE PRODUCTOS */}
      {!cargando && !error && (
        <>
          <div
            className="productos-grid"
            id="productos-catalogo"
          >
            {productosFiltrados.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={{
                  id: producto.id,
                  nombre: producto.title,
                  categoria: producto.category,
                  precio: producto.price,
                  moneda: 'USD',
                  imagen: producto.thumbnail,
                }}
              />
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <p>
              No encontramos productos con esos filtros.
            </p>
          )}
        </>
      )}
    </main>
  )
}

export default Catalogo
