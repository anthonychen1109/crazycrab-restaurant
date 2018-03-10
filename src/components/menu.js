import React, { Component } from 'react';
import images from './images';

// Components
import Appetizer from './appetizer';
import Fried from './fried';
import Side from './side';
import Dirty from './dirty';
import Seasonal from './seasonal';
import Own from './own';

// Images
const backgroundImg = images.menu;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: ''
    };
    this.setItem = this.setItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  setItem(item) {
    this.setState({selectedItem: item});
  }

  renderItem(item) {
    switch(item) {
      case 'appetizer':
        return <Appetizer />;
      case 'fried':
        return <Fried />;
      case 'side':
        return <Side />
      case 'dirty':
        return <Dirty />
      case 'seasonal':
        return <Seasonal />
      case 'own':
        return <Own />
      default:
        return <Appetizer />;
    }
  }

  render() {
    return (
      <div className="menu"
        style={{backgroundImage: "url(" + backgroundImg + ")",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%"
        }}>
        <div style={{backgroundColor:"rgba(0,0,0,0.3)"}}>
        <div className="menu-container container">
          <h1>Menu</h1>
          <div className="menu-nav">
            <ul>
              <li onClick={() => this.setItem('appetizer')}>Appetizer</li>
              <li onClick={() => this.setItem('fried')}>Something Fried</li>
              <li onClick={() => this.setItem('side')}>Sides</li>
              <li onClick={() => this.setItem('dirty')}>Get Your Hands Dirty</li>
              <li onClick={() => this.setItem('seasonal')}>Seasonal Food</li>
              <li onClick={() => this.setItem('own')}>Make Your Own Seafood Combo</li>
            </ul>
          </div>
          <div className="menu-display">
            <div>
              {this.renderItem(this.state.selectedItem)}
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Menu;
