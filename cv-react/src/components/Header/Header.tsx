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
          <Typography className="nav-item" sx={{ fontSize: '28px', fontWeight: '600' }}>
            <Link
              href="#top"
              underline="none"
              color="white"
              sx={{ fontSize: '42px', fontWeight: '600', padding: '0px 85px 0px 20px' }}
            >
              {t('Header.Name')}
            </Link>
            <Link href="#about" underline="none" color="white">
              {t('Header.AboutMe')}
            </Link>
            <Link href="#skills" underline="none" color="white">
              {t('Header.Skills')}
            </Link>
            <Link href="#xp" underline="none" color="white">
              {t('Header.WorkXp')}
            </Link>
            <Link href="#education" underline="none" color="white">
              {t('Header.Education')}
            </Link>
            <Link href="#languages" underline="none" color="white">
              {t('Header.Languages')}
            </Link>
            <Link href="#projects" underline="none" color="white">
              {t('Header.Projects')}
            </Link>
          </Typography>
          <LanguageToggler />
        </Box>
      </AppBar>
    </StyledEngineProvider>
  );
};

export default Header;
