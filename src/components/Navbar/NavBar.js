import "./NavBar.css";
import ImagenLogo from '../../assets/logo2.svg';
import { Link } from "react-router-dom";
import { CartWitdget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={ImagenLogo} alt='logo astromatch' />
      </Link>
      <div className='navegacion'>
        <Link to='/'>Inicio</Link>
        <Link to='/libros'>Libros</Link>
        <Link to='/cursos'>Cursos</Link>
      </div>
      <div>
        <link to="/cart">
          <CartWitdget />
        </link>
      </div>


    </nav>
  )
}