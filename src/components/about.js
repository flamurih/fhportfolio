import React from 'react';
import me from '../assets/img/me.jpg';

export default function About() {
  return (
    <>
        <div className="about" id="about">
        <div className="container">
          <div className="pars">
            <h3>About me</h3>
            <hr className="basichr" ></hr>
            <div className="par">
              <p>Hello there. My name is Flamur Hoxha and I enjoy trying to build things for the internet.
                Since a kid, I was interested in web development, but I got first instructions in this field back
                in 2014, when I saw w3schools tutorials while googling. That was the time when i started learning 
                HTML and CSS and made me more curios. So, I decided to gain more knowledge about web development.
              </p>
              <p>
                Since then, I have been studying and learning more in this field on the college of UBT, where I 
                learned JAVA fundamentals, but in the same time I followed a number of trainings such as JavaScript,ReactJs,Python.
              
                I felt very happy when I got the first place in the hackathon "Frankofonia dhe Inovacioni digjital" First place, and this encouraged me to continue working hard.
              </p>
            </div>
            <img src={me} className="me" alt='FlamurHoxha'></img>
          </div>
        </div>
      </div>
    </>
  )
}
