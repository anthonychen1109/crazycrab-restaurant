import React from 'react';

// Images
import images from './images';

const headerbg = images.headerBg;
const logo = images.logo;

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="nav">
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="logo">
        <img className="crab animated tada" src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default Header;
