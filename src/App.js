import React from 'react';
import logo from './undraw_podcast_q6p7.svg';
import qa from './undraw_online_test_gba7.svg';
import { AiOutlineAudio } from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class='navbar'>
        <div className='Branding'><AiOutlineAudio />Decibel</div>
        <ul className='navbar-links'>
          <li>Home</li>
          <li>Notes</li>
          <li><button>Login</button></li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Decibel</h1>
        <p>love the sound of it!</p>
      </header>
      <div className='about'>
        <div style={{width: '80%'}}>
          <h1>What is Decibel?</h1>
          <p>Decibel is an audio based note taking app, it's made for nerds by nerds.
          Oftentimes its much quicker and more convient to make notes using audio samples when compared to writing notes manually.
          Decibel aims to utilize this to your advantage, we take the notes you would normally write as audio recordings that you provide. We save them, so you can use them at your leisure.</p>
        </div>
        <img src={qa} className="image" alt="logo" />
      </div>
    </div>
  );
}

export default App;
