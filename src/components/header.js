import React, { Component } from 'react';
import $ from 'jquery';

// Images
import images from './images';

const logo = images.logo;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.goToByScroll = this.goToByScroll.bind(this);
    this.reloadPage = this.reloadPage.bind(this);
    this.dropDownMenu = this.dropDownMenu.bind(this);
  }

  goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'fast');
  }

  reloadPage() {
    window.location.reload();
  }

  dropDownMenu() {
    let x = document.getElementById('topnav')
    if (x.className === "nav") {
      x.className = 'responsive';
    } else {
      x.className = 'nav';
    }
  }

  render() {
    return (
      <div className="header">
        <div className="navbar">
          <div id="topnav" className="nav">
            <p onClick={this.reloadPage}>Home</p>
            <p onClick={() => this.goToByScroll('about')}>About</p>
            <p onClick={() => this.goToByScroll('menu')}>Menu</p>
            <p onClick={() => this.goToByScroll('contact')}>Contact</p>
            <p
              className="hamburger"
              onClick={this.dropDownMenu}
              >
              <i className="fas fa-align-justify"></i></p>
          </div>
        </div>
        <div className="logo">
          <img className="crab animated tada" src={logo} alt="logo"/>
        </div>
      </div>
    )
  }
}

export default Header;
