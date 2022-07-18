import React from 'react';
import { Box, Typography, Button, CardMedia, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './About.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box id="about" component="div" sx={{ marginTop: '17px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="about-container">
        <Box component="div" className="about-left-side">
          <Typography className="about-left-side-title">01 // {t('AboutMe.Title')}</Typography>
          <Box component="div" className="photos-container">
            <Box component="div" className="photo item1">
              <Typography>Photo 1</Typography>
            </Box>
            <Box component="div" className="photo item2">
              <Typography>Photo 2</Typography>
            </Box>
            <Box component="div" className="photo item3">
              <Typography>Photo 3</Typography>
            </Box>
            <Button variant="contained" href="#skills" className="skills-button">
              {t('AboutMe.SkillsBtn')}
            </Button>
          </Box>
        </Box>
        <Box component="div" className="about-right-side">
          <Typography className="about-right-side-title">01 // {t('AboutMe.Title')}</Typography>
          <Typography className="about-right-side-text" sx={{ textAlign: 'right' }}>
            {t('AboutMe.MainText1')}
            <Link href="#projects" className="about-right-side-text">
              {t('Projects.Title')}
            </Link>
          </Typography>
          <Typography className="about-right-side-text" sx={{ textAlign: 'right' }}>
            {t('AboutMe.MainText2')}
          </Typography>
          <Typography className="about-right-side-more-info">{t('AboutMe.MoreInfo')}</Typography>
          <Box component="div" className="player">
            <CardMedia
              component="iframe"
              src="https://www.youtube.com/embed/W5OqGDJf7jw"
              allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={t('AboutMe.VideoCV')}
              className="youtube-video"
            />
          </Box>
          <Box component="div" className="skills-button-right-container">
            <Button variant="contained" href="#skills" className="skills-button-right">
              {t('AboutMe.SkillsBtn')}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
