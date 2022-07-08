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
      {/* <Box id="top" component="div" sx={{ marginTop: '46px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box> */}
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
            href="#about"
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
          <Link
            href="https://app.rs.school/cv/18683e07-f4e2-4eb9-91df-8ebec97e3ad7"
            sx={{ color: 'red' }}
          >
            <IconContext.Provider value={{ size: '35px' }}>
              <FaPrint />
            </IconContext.Provider>
          </Link>
          <Link href="https://www.codewars.com/users/exekuta/" sx={{ color: 'white' }}>
            <IconContext.Provider value={{ size: '35px' }}>
              <SiCodewars />
            </IconContext.Provider>
          </Link>
          <Link href="https://github.com/exekuta/" sx={{ color: 'white' }}>
            <IconContext.Provider value={{ size: '35px' }}>
              <SiGithub />
            </IconContext.Provider>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Main;
