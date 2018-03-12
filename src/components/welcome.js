import React from 'react';

// Images
import images from './images';

const welcome = images.welcome;

const Welcome = () => {
  return (
    <div id="about" className="welcome">
      <div className="welcome-container container">
        <div className="welcome-text">
          <h1>Welcome!</h1>
          <p>We're locals who wanted to bring a friendly and casual spot and at the same time provide delicious food. </p>
          <p>At Crazy Crab, our specialty is fresh seafood. Come join us in the dining room and experience seafood so fresh it melts in your mouth.</p>
          <p>We look forward to meeting you!</p>
        </div>
        <div
          className="welcome-img"
          style={{backgroundImage: "url(" + welcome + ")",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "300px",
                  width: "100%"
          }}
          >
        </div>
      </div>

    </div>
  )
}

export default Welcome;
