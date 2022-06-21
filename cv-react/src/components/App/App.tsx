import React from 'react';
// import avatar from './assets/images/avatar.jpg';
// import player from './assets/images/custom-video-player.png';
// import clock from './assets/images/js-clock.png';
// import museum from './assets/images/museum.png';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './App.scss';

function App() {
  return (
    <div className="main-container">
      <Header />
      <main>
        <Main />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
