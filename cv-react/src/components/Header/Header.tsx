import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledEngineProvider } from '@mui/material/styles';
import { AppBar, Box, Link, Typography } from '@mui/material';
import LanguageToggler from '../LanguageToggler/LanguageToggler';
import './Header.scss';

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledEngineProvider injectFirst>
      <AppBar
        position="sticky"
        color="transparent"
        className="header-container"
        sx={{ boxShadow: 'none' }}
      >
        <Box component="nav" className="navigation">
          <Link href="#top" underline="none" color="white" className="nav-title">
            {t('Header.Name')}
          </Link>
          <Box component="div" className="nav-links">
            <Typography component="span" className="nav-item">
              <Link href="#about" underline="none" color="white">
                {t('Header.AboutMe')}
              </Link>
              <Link href="#skills" underline="none" color="white">
                {t('Header.Skills')}
              </Link>
              <Link href="#workxp" underline="none" color="white">
                {t('Header.WorkXp')}
              </Link>
              <Link href="#workxp" underline="none" color="white">
                {t('Header.Education')}
              </Link>
              <Link href="#workxp" underline="none" color="white">
                {t('Header.Languages')}
              </Link>
              <Link href="#projects" underline="none" color="white">
                {t('Header.Projects')}
              </Link>
            </Typography>
            <LanguageToggler />
          </Box>
        </Box>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default Header;
