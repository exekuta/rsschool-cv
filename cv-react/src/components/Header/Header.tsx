import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledEngineProvider } from '@mui/material/styles';
import { AppBar, Box, Link, Typography, ButtonBase } from '@mui/material';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import LanguageToggler from '../LanguageToggler/LanguageToggler';
import './Header.scss';

const Header = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  // console.log(showMenu);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <StyledEngineProvider injectFirst>
      <AppBar
        position="sticky"
        color="transparent"
        className="header-container"
        sx={{ boxShadow: 'none' }}
      >
        <Box component="nav" className="navigation">
          <Box component="div" className="nav-links">
            <Typography component="span" className="nav-item">
              <Link href="#about" underline="none" color="white" onClick={closeMenu}>
                {t('Header.AboutMe')}
              </Link>
              <Link href="#skills" underline="none" color="white" onClick={closeMenu}>
                {t('Header.Skills')}
              </Link>
              <Link href="#workxp" underline="none" color="white" onClick={closeMenu}>
                {t('Header.WorkXp')}
              </Link>
              <Link href="#workxp" underline="none" color="white" onClick={closeMenu}>
                {t('Header.Education')}
              </Link>
              <Link href="#workxp" underline="none" color="white" onClick={closeMenu}>
                {t('Header.Languages')}
              </Link>
              <Link href="#projects" underline="none" color="white" onClick={closeMenu}>
                {t('Header.Projects')}
              </Link>
            </Typography>
            <LanguageToggler />
          </Box>
          {/* SliderMenu */}
          <Link href="#top" underline="none" color="white" className="nav-title">
            {t('Header.Name')}
          </Link>
          <Box component="div" className="nav-burger">
            <ButtonBase onClick={() => setShowMenu(!showMenu)}>
              <Typography component="span">MENU</Typography>
            </ButtonBase>
            <LanguageToggler />
          </Box>
          <Box className={`nav-slider ${showMenu ? 'close' : ''}`}>
            <Typography component="span" className="nav-slider-links">
              <Box className="nav-slider-title">
                <Box component="div">
                  <ButtonBase href="#top">
                    <IconContext.Provider value={{ size: '20px', className: 'react-icons' }}>
                      <AiOutlineHome />
                    </IconContext.Provider>
                  </ButtonBase>
                </Box>
                <Link href="#about" underline="none" color="white" onClick={closeMenu}>
                  {t('Header.AboutMe')}
                </Link>
                <Box component="div">
                  <ButtonBase onClick={closeMenu}>
                    <IconContext.Provider value={{ size: '20px', className: 'react-icons' }}>
                      <AiOutlineClose />
                    </IconContext.Provider>
                  </ButtonBase>
                </Box>
              </Box>
              <Link href="#skills" underline="none" color="white" onClick={closeMenu}>
                {t('Header.Skills')}
              </Link>
              <Link href="#workxp" underline="none" color="white" onClick={closeMenu}>
                {t('Header.WorkXp')}
              </Link>
              <Link href="#workxp" underline="none" color="white" onClick={closeMenu}>
                {t('Header.Education')}
              </Link>
              <Link href="#workxp" underline="none" color="white" onClick={closeMenu}>
                {t('Header.Languages')}
              </Link>
              <Link href="#projects" underline="none" color="white" onClick={closeMenu}>
                {t('Header.Projects')}
              </Link>
            </Typography>
          </Box>
        </Box>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default Header;
