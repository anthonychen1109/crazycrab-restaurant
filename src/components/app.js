import React from 'react';

// Components
import Header from './header';
import Welcome from './welcome';
import Menu from './menu';
import Between from './between';
import Contact from './contact';

const App = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Menu />
      <Between />
      <Contact />
    </div>
  )
}

export default App;
