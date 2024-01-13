import React from 'react';
import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <div className='logo'>
          <img src="../imgs/storeLogo.png" alt="" />
        </div>
      </Link>
      <ul className="lists">
        <li className='categories'>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li className='categories'>
          <Link to='/clothes'>Clothes</Link>
        </li>
        <li className='categories'>
          <Link to="/miscellaneous">Miscellaneous</Link>
        </li>
        <li className='categories'>
          <Link to="/shoes">Shoes</Link>
        </li>
      </ul>
      <div className='pages'>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/cart">
          <ShoppingCart size={42} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
