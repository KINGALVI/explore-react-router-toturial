import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to={'/'}>Defalt</Link>
      <br />
      <Link to={'/home'}>Home</Link>
      <br />
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/friend'}>Friend</Link>
    </div>
  );
};

export default Header;