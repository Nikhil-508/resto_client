import React from 'react'
import './Navbar.css'
import { Assets } from '../../Assets'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <img className="logo" src={Assets.logo} alt="" />
        <div className="text-container">
          <div className='two-text'>
            <h1 style={{ color: "#0796EF" }}>DEEP</h1>
            <h1 style={{ color: "#FFFFFF" }}>NET</h1>
          </div>
          <h1 style={{ color: "#857878" }}>SOFT</h1>
        </div>
      </div>
      <div className="nav-menu">
        <ul className="menu-list">
          <li>HOME</li>
          <li>MENU</li>
          <li>MAKE A RESERVATION</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
