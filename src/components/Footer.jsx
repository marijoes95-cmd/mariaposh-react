
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-superior">
        <div className="footer-marca">
          <h2>Mariaposh.</h2>
          <p>THE BEAUTY EDIT</p>
        </div>

        <div className="footer-enlaces">
          <Link to="/">INICIO</Link>
          <Link to="/catalogo">CATÁLOGO</Link>
          <Link to="/catalogo?ver=categorias">
            CATEGORÍAS
          </Link>
        </div>
      </div>

      <div className="footer-inferior">
        <span>© 2026 MARIAPOSH.</span>
        <span>BEAUTY IS AN ATTITUDE.</span>
      </div>
    </footer>
  )
}

export default Footer
