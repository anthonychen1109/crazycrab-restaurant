import React, { Component } from 'react';
import $ from 'jquery';

// Components
import Header from './header';
import Welcome from './welcome';
import Menu from './menu';
import Between from './between';
import Contact from './contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.pageTop = this.pageTop.bind(this);
  }

  pageTop(){
    $("html, body").animate({ scrollTop: 0 }, 'fast');
    return false;
  };

 render() {
   return (
     <div>
       <button
         onClick={this.pageTop}
         className="btn btn-light toTop"
         >
         &#9650;
       </button>
       <Header />
       <Welcome />
       <Menu />
       <Between />
       <Contact />
     </div>
   )
 }
}

export default App;
