
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const productosDestacados = [
  {
    id: 1,
    nombre: 'Labial Velvet',
    categoria: 'Maquillaje',
    precio: 185000,
    imagen: '/images/labial.jpeg',
  },
  {
    id: 2,
    nombre: 'Sérum Glow',
    categoria: 'Skincare',
    precio: 295000,
    imagen: '/images/serum.jpeg',
  },
  {
    id: 3,
    nombre: 'Eau de Rose',
    categoria: 'Fragancias',
    precio: 450000,
    imagen: '/images/perfume.jpeg',
  },
  {
    id: 4,
    nombre: 'Crema Lumière',
    categoria: 'Skincare',
    precio: 320000,
    imagen: '/images/crema.jpeg',
  },
]

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
    nombre: 'Cuidado de la piel',
    categoria: 'skin-care',
    imagen: '/images/serum.jpeg',
  },
]

function Home() {
  return (
    <main>
      {/* 01 / PORTADA */}
      <section className="hero">
        <div className="hero-imagen">
          <img
            src="/images/portada.png"
            alt="Modelo con maquillaje editorial"
          />
        </div>

        <div className="hero-contenido">
          <h2 className="hero-titulo">
            <span>La belleza</span>
            <span>no pide</span>
            <span className="hero-acento">permiso.</span>
          </h2>

          <p>
            Una selección de maquillaje, cuidado de la piel
            y fragancias para expresar tu propia versión
            de belleza.
          </p>

          <Link to="/catalogo" className="hero-boton">
            EXPLORAR LA SELECCIÓN
          </Link>
        </div>
      </section>

      {/* 02 / LOS ELEGIDOS */}
      <section className="productos-seccion">
        <div className="productos-encabezado">
          <span className="productos-etiqueta">
            02 / LA SELECCIÓN
          </span>

          <span className="productos-curated">
            CURATED BY MARIAPOSH
          </span>
        </div>

        <h2 className="productos-titulo">
          Los elegidos.
        </h2>

        <div className="productos-grid">
          {productosDestacados.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </section>

      {/* 03 / UNIVERSOS DE BELLEZA */}
      <section className="home-categorias">
        <div className="productos-encabezado">
          <span className="productos-etiqueta">
            03 / UNIVERSOS DE BELLEZA
          </span>

          <span className="productos-curated">
            EXPLORE YOUR BEAUTY
          </span>
        </div>

        <h2 className="productos-titulo">
          Tu belleza, tus reglas.
        </h2>

        <div className="categorias-grid">
          {categorias.map((item) => (


            <Link
            key={item.categoria}
            className="categoria-card"
            to={`/catalogo?ver=categorias&categoria=${item.categoria}`}
            >


              <img
                src={item.imagen}
                alt={item.nombre}
              />

              <span>{item.nombre}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 04 / MANIFIESTO EDITORIAL */}
      <section className="home-manifiesto">
        <div className="manifiesto-texto">
          <span className="productos-etiqueta">
            04 / EL MANIFIESTO
          </span>

          <h2>
            La belleza no sigue reglas.
            <br />
            <em>Las redefine.</em>
          </h2>

          <p>
            No se trata de encajar en una definición.
            Se trata de crear la tuya.
          </p>
        </div>

        <div className="manifiesto-imagen">
          <img
            src="/images/portada.png"
            alt="Editorial de belleza Mariaposh"
          />
        </div>
      </section>
    </main>
  )
}

export default Home
