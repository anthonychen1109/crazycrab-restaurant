import React from 'react';

// Images
import images from './images';

const Logo = images.between;
const Img1 = images.img1;
const Img2 = images.img2;
const Img3 = images.img3;
const Img4 = images.img4;

const Between = () => {
  return (
    <div className="between">
      <div className="between-container container">
        <div className="between-top">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="between-bottom">
          <div><img src={Img1}/></div>
          <div><img src={Img2}/></div>
          <div><img src={Img3}/></div>
          <div><img src={Img4}/></div>
        </div>
      </div>
    </div>
  )
}

export default Between;
