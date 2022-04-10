import React from 'react';
import ContactForm from './contactform.js';
import Users from './users.js';
export default function contact() {
  return (
    <>
        <div className="contact" id="contactform">
        <div className="container">
          <div className="contactme">
            <h3>Contact Me</h3>
            <hr className="basichr"></hr>
            <div className='usr'>
            <ContactForm />
            <Users />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
