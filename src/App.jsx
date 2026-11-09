
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Detalle from './pages/Detalle'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <p>VOL. 01 / 2026</p>
          <h1>Mariaposh.</h1>
          <p>THE BEAUTY EDIT</p>
        </header>



        <nav>
          <NavLink to="/" end>
            INICIO
          </NavLink>

          <NavLink
            to="/catalogo"
            className={({ isActive }) =>
              isActive && window.location.search !== '?ver=categorias'
                ? 'active'
                : ''
            }
          >
            CATÁLOGO
          </NavLink>

          <NavLink
            to="/catalogo?ver=categorias"
            className={() =>
              window.location.search === '?ver=categorias'
                ? 'active'
                : ''
            }
          >
            CATEGORÍAS
          </NavLink>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/producto/:id" element={<Detalle />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
