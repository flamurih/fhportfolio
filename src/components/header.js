import React from 'react';
import Navigationbar from './navigationbar';
import Sidebar from './sidebar.js'

export default function header() {
  return (
    <>
        <div className="header">
        <Navigationbar />
        <Sidebar />
        <div className="container">
          <div className="fpg">
            <h3 className="slideleft">Hi, my name is</h3>
            <h1 className="slideleft">Flamur Hoxha</h1>
            <h1 className="webh slideleft"> Web Developer</h1>
            <p className="slideleft">I am a web developer studying computer sciences. Currently, I am focused in web development as a Full Stack Developer. </p>
            <div className="butonmore">
              <a href="#about" className="more">More about me</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
