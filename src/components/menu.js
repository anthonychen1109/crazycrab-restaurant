import React from 'react';

// Components
import Appetizer from './appetizer';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-container container">
        <h1>Menu</h1>
        <div className="menu-nav">
          <ul>
            <li>Appetizer</li>
            <li>Something Fried</li>
            <li>Sides</li>
            <li>Get Your Hands Dirty</li>
            <li>Seasonal Food</li>
            <li>Make Your Own Seafood Combo</li>
          </ul>
        </div>
        <div className="menu-display">
          <Appetizer />
        </div>
      </div>
    </div>
  )
}

export default Menu;
