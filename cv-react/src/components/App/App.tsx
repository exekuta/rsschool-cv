import React from 'react';
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
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  // }, []);

  return (
    <MuiTheme>
      <React.Fragment>
        <CssBaseline />
        <Box component="div" className="page-container">
          <Header />
          <Box component="main" className="main-container">
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
