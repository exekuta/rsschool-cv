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
import { Box, CssBaseline } from '@mui/material';
import './App.scss';
import MuiTheme from '../MuiTheme/MuiTheme';

function App() {
  return (
    <MuiTheme>
      <React.Fragment>
        <CssBaseline />
        <Box component="div" className="main-container">
          <Header />
          <Box component="main">
            <Main />
            <About />
            <Skills />
            <Experience />
            <Projects />
          </Box>
          <Footer />
        </Box>
      </React.Fragment>
    </MuiTheme>
  );
}

export default App;
