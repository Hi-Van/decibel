import React from 'react';
import logo from './undraw_podcast_q6p7.svg';
import qa from './undraw_online_test_gba7.svg';
import tutor from './undraw_Faq_re_31cw.svg'
import { AiOutlineAudio } from 'react-icons/ai';
import { FcHome, FcKindle } from 'react-icons/fc';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav className='navbar'>
        <div className='Branding'><AiOutlineAudio />Decibel</div>
        <ul className='navbar-links'>
          <li style={{ borderBottom: "2px solid #6C63FF" }}><FcHome /> Home</li>
          <li style={{ opacity: '60%' }}><FcKindle /> Notes</li>
          <li><Link to="about" smooth={true}><button>Login</button></Link></li>
        </ul>
      </nav>

      <header className="App-header">
        <Fade left>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Decibel</h1>
          <p>love the sound of it!</p>
        </Fade>
      </header>

      <div className='about'>
        <Fade bottom>
        <div className='about-text'>
          <h1>What is Decibel?</h1>
          <p>Decibel is an audio based note taking app, it's made for nerds by nerds!
          Oftentimes its much quicker and more convient to make notes using audio samples when compared to writing notes manually.
          Decibel aims to utilize this to your advantage, we take the notes you would normally write as audio recordings that you provide. We save them, so you can use them at your leisure.</p>
        </div>
        </Fade>
        <img src={qa} className="image" alt="logo" />
      </div>

      <div className='tutorial'>
      <img src={tutor} className="image" alt="logo" />
        <Fade bottom>
        <div className='about-text'>
          <h1>How do I get started?</h1>
            <p>Scroll down to the next section to sign up with an account directly to our systems. Otherwise, Decibel also provides the option to use authorization systems from Google, Github, and other services to sign up for an account.
            We use OAuth in order to indentify third party accounts and get login creditentials. This keeps your external accounts separate from our systems.
            Any of your data that is not integral to Decibel services will not be recorded.</p>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
