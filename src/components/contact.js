import React from 'react';
import Iframe from 'react-iframe';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-container container">
        <div className="contact-info">
          <h5>Location:</h5>
          <p>10160 Fairfax Blvd Suite 102 Fairfax VA 22030</p>
          <br />
          <h5>Hours:</h5>
          <p>Mon - Thurs: 11:00 AM - 10:00 PM</p>
          <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
          <p>Sun: 11:00 AM - 10:00 PM</p>
          <br />
          <h5>Telephone:</h5>
          <p>(telephone number)</p>
        </div>
        <div className="contact-location">
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.70066263082!2d-77.29810228465064!3d38.86220847957615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64ea56c523525%3A0x41189fe8689b57c2!2s10160+Fairfax+Blvd+%23102%2C+Fairfax%2C+VA+22030!5e0!3m2!1sen!2sus!4v1520628388761"
            width="100%"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
        </div>
      </div>
    </div>
  )
}

export default Contact;
