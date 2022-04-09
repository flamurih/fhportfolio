import './App.css';
import logo from './assets/img/fhlogo.png';
import me from './assets/img/me.jpg';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="navbar">
          <div className="navlogo">
            <img src={logo} alt="fhlogo" />
          </div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">My Skills</a></li>
            <li><a href="#contactform">Contact</a></li>
          </ul>
        </div>
        <div className="sidebar">
          <div className="icons">
            <ul>
              <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
              <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
              <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
            </ul>
          </div>
        </div>
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
            <img src={me} className="me"></img>
          </div>
        </div>
      </div>
      <div className="skills" id="skills">
        <div className="container">
          <div className="pars">
            <h3>My skills</h3>
            <hr className="basichr"></hr>
            <div className="par">
              <p>Since beginning my journey as a student, I increased my skills good enough to start programming
                I've finished a number of trainings, so that I am ready to go further by developing web apps
              </p>
              <p>I built many websites as excersise with HTML,CSS, JAVASCRIPT,REACTJS,PHP and collaborated with friends and other
                talented people on how to built more web products for both business and consumer use.
              </p>
            </div>
          </div>
          <div className="graph">
              <h4>Front-end</h4>
              <hr className="fronthr"></hr>
              <h4>Back-end</h4>
              <hr className="backhr"></hr>
              <h4>ReactJs</h4>
              <hr className="reacthr"></hr>
              <h4>Php</h4>
              <hr className="phphr"></hr>
              <h4>Python</h4>
              <hr className="pythonhr"></hr>
          </div>
        </div>
      </div>
      <div className="contact" id="contactform">
        <div className="container">
          <div className="contactme">
            <h3>Contact Me</h3>
            <hr className="basichr"></hr>
            <form>
              <input type="text" name="name" placeholder="Name" className="f input"></input>
              <input type="text" name="email" placeholder="Email" className="f input"></input>
              <input type="text" name="subject" placeholder="Subject" className="s input"></input>
              <textarea rows="4" cols="50" name="message" form="contactform" placeholder="Message" className="s input m"></textarea>
            </form>
            <div className="map">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
