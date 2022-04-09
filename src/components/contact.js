import React from 'react';
import ContactForm from './contactform.js';

export default function contact() {
  return (
    <>
        <div className="contact" id="contactform">
        <div className="container">
          <div className="contactme">
            <h3>Contact Me</h3>
            <hr className="basichr"></hr>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
