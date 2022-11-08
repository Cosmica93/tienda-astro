import ImagenLogo from '../../assets/logo2.svg';
import { Link, NavLink } from "react-router-dom";
import { CartWitdget } from "../CartWidget/CartWidget";
import React from 'react';

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
        <Link to='/'>Contacto</Link>
        <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/Cart">Mazos</NavLink>
        <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/Courses">Cursos</NavLink>
        <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/Books">Libros</NavLink>
        <NavLink className={({ isActive }) => isActive === true ? 'claseActiva' : 'claseInactiva'} to="/category/Astros">Deco</NavLink>
      </div>
      <div>
          <CartWitdget />
      </div>
    </nav >
  )
}