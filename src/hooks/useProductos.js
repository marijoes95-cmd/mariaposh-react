
import { useState, useEffect } from 'react'

function useProductos() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let activo = true

    async function obtenerProductos() {
      try {
        const categorias = [
          'beauty',
          'fragrances',
          'skin-care'
        ]

        const respuestas = await Promise.all(
          categorias.map((categoria) =>
            fetch(
              `https://dummyjson.com/products/category/${categoria}`
            )
          )
        )

        if (respuestas.some((respuesta) => !respuesta.ok)) {
          throw new Error('No se pudieron cargar los productos')
        }

        const datos = await Promise.all(
          respuestas.map((respuesta) => respuesta.json())
        )

        const todosLosProductos = datos.flatMap(
          (dato) => dato.products
        )

        if (activo) {
          setProductos(todosLosProductos)
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

    obtenerProductos()

    return () => {
      activo = false
    }
  }, [])

  return { productos, cargando, error }
}

export default useProductos
