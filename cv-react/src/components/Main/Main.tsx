import React from 'react';
import { Box, Typography, Avatar, Button, Link } from '@mui/material';
import { FaPhone, FaEnvelope, FaPrint } from 'react-icons/fa';
import { SiCodewars, SiGithub, SiTelegram } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';
import avatar from '../../assets/images/avatar.jpg';
import './Main.scss';

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box component="section" className="name-container">
        <Box component="div" className="titles">
          <Typography className="first-name">{t('Main.FirstName')}</Typography>
          <Typography className="second-name">{t('Main.LastName')}</Typography>
          <Typography className="job-title">{t('Main.JobTitle')}</Typography>
        </Box>
        <Box component="div" className="avatar-container">
          <Avatar alt="My photo" src={avatar} aria-label={t('Main.Avatar')} className="avatar" />
          <Button variant="contained" href="#about" className="aboutme-button">
            {t('Main.AboutMeBtn')}
          </Button>
        </Box>
      </Box>
      <Box component="div" className="contacts-container">
        <Typography className="contacts">Contacts:</Typography>
        <Box component="div" className="contacts-item">
          <IconContext.Provider value={{ className: 'react-icons-main' }}>
            <FaPhone />
          </IconContext.Provider>
          <Typography className="contacts-text">+7 (917) 253-53-86</Typography>
        </Box>
        <Box component="div" className="contacts-item">
          <IconContext.Provider value={{ className: 'react-icons-main' }}>
            <FaEnvelope />
          </IconContext.Provider>
          <Typography className="contacts-text">exekuta@gmail.com</Typography>
        </Box>
        <Box component="div" className="contacts-item">
          <IconContext.Provider value={{ className: 'react-icons-main' }}>
            <SiTelegram />
          </IconContext.Provider>
          <Typography className="contacts-text">@exekuta</Typography>
        </Box>
        <Box component="div" className="contacts-links">
          <Link
            href="https://app.rs.school/cv/18683e07-f4e2-4eb9-91df-8ebec97e3ad7"
            sx={{ color: 'red' }}
          >
            <IconContext.Provider value={{ className: 'react-icons-main' }}>
              <FaPrint />
            </IconContext.Provider>
          </Link>
          <Link href="https://www.codewars.com/users/exekuta/" sx={{ color: 'white' }}>
            <IconContext.Provider value={{ className: 'react-icons-main' }}>
              <SiCodewars />
            </IconContext.Provider>
          </Link>
          <Link href="https://github.com/exekuta/" sx={{ color: 'white' }}>
            <IconContext.Provider value={{ className: 'react-icons-main' }}>
              <SiGithub />
            </IconContext.Provider>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Main;
