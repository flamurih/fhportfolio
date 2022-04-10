import React from 'react';
import setUser from './users';

export default function ContactForm() {
  return (
    <>
        <form>
            <input type="text" name="name" placeholder="Name" className="f input"></input>
            <input type="text" name="email" placeholder="Email" className="f input"></input>
            <input type="text" name="subject" placeholder="Subject" className="s input"></input>
            <textarea rows="4" cols="50" name="message" form="contactform" placeholder="Message" className="s input m"></textarea>
            <input type="submit" value="Submit" className='more'></input>
        </form>
    </>
  )
}
