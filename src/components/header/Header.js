import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div>
      <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={'/'}>Defalt</NavLink>
      <br />
      <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={'/home'}>Home</NavLink>
      <br />
      <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={'/about'}>About</NavLink>
      <br />
      <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={'/friend'}>Friend</NavLink>
    </div>
  );
};

export default Header;