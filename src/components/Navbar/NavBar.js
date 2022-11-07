import "./NavBar.css";
import ImagenLogo from '../../assets/logo2.svg';
import { Link, NavLink } from "react-router-dom";
import { CartWitdget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <img className="logo" src={ImagenLogo} alt='logo astromatch' />
        </Link>
        </div>
        <div className='navegacion'>
          <Link to='/'>Inicio</Link>
          <Link to="/contacto">Contacto</Link>
          <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/mazo">Mazo</NavLink>
          <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/cursos">Cursos</NavLink>
          <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/Ropa">Ropa</NavLink>
        </div>
        <div>
          <CartWitdget />
        </div>
    </nav >
  )
}