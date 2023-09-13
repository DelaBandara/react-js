import React from 'react';
import Logo from '../assets/pizzaLogo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside"></div>
      <div className="rightside"></div>
        <img src={Logo}/>
    </div>
  );
}

export default Navbar;
