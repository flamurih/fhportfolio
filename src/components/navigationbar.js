import React from 'react';


export default function Navigationbar() {
  return (
    <>
        <div className="navbar"> 
          <div className="navlogo">
            <h1>FH</h1>
          </div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">My Skills</a></li>
            <li><a href="#contactform">Contact</a></li>
          </ul>
        </div>
    </>
  )
}
