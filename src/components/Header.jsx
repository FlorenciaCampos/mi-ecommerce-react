
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import '../styles/index.css'

const Header = () => {
  return (
    <header className="header">
      
      <div className="menu-hamburguesa"> 
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

        <nav className="menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
          </ul>
        </nav>
      </div>

      
      <img src={logo} alt="Logo Mi Cuoco" className="logo-img" />

   
      <div className="logo-central">
        <h1>Mi Cuoco</h1>
        <p>Comiditas en tela</p>
      </div>

    
      <div className="lado-derecho">
        <Link to="/carrito" className="carrito">🛒</Link>   
      </div>
    </header>
  );
};

export default Header;

  