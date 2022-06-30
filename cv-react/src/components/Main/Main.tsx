import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { FaPhone, FaEnvelope, FaPrint } from 'react-icons/fa';
import { SiCodewars, SiGithub, SiTelegram } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import avatar from '../../assets/images/avatar.jpg';
import './Main.scss';
import { IconContext } from 'react-icons';

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box component="section" className="name-container">
        <Box component="div" className="titles">
          <Typography
            sx={{ fontSize: '96px', fontWeight: '800', lineHeight: '40px', paddingTop: '150px' }}
          >
            {t('Main.FirstName')}
          </Typography>
          <Typography sx={{ fontSize: '96px', fontStyle: 'italic' }}>
            {t('Main.LastName')}
          </Typography>
          <Typography sx={{ fontSize: '72px', paddingTop: '200px' }}>
            {t('Main.JobTitle')}
          </Typography>
        </Box>
        <Box component="div" className="avatar">
          <Avatar
            alt="My photo"
            src={avatar}
            aria-label={t('Main.Avatar')}
            sx={{ width: '335px', height: '335px', border: '5px solid #fff' }}
          />
          <Button
            variant="contained"
            sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '40px', marginTop: '200px' }}
          >
            {t('Main.AboutMeBtn')}
          </Button>
        </Box>
      </Box>
      <Box component="div" className="contacts">
        <Typography
          sx={{ fontSize: '28px', fontWeight: '600', lineHeight: '42px', marginRight: '10px' }}
        >
          Contacts:
        </Typography>
        <Box component="div" className="contacts-item">
          <IconContext.Provider value={{ size: '35px' }}>
            <FaPhone />
          </IconContext.Provider>
          <Typography
            sx={{
              fontSize: '28px',
              fontWeight: '600',
              lineHeight: '42px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            +7 (917) 253-53-86
          </Typography>
        </Box>
        <Box component="div" className="contacts-item">
          <IconContext.Provider value={{ size: '35px' }}>
            <FaEnvelope />
          </IconContext.Provider>
          <Typography
            sx={{
              fontSize: '28px',
              fontWeight: '600',
              lineHeight: '42px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            exekuta@gmail.com
          </Typography>
        </Box>
        <Box component="div" className="contacts-item">
          <IconContext.Provider value={{ size: '35px' }}>
            <SiTelegram />
          </IconContext.Provider>
          <Typography
            sx={{
              fontSize: '28px',
              fontWeight: '600',
              lineHeight: '42px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            @exekuta
          </Typography>
        </Box>
        <Box component="div" className="contacts-item" sx={{ gap: '25px' }}>
          <IconContext.Provider value={{ size: '35px' }}>
            <FaPrint />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '35px' }}>
            <SiCodewars />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '35px' }}>
            <SiGithub />
          </IconContext.Provider>
        </Box>
      </Box>
    </>
  );
};

export default Main;
