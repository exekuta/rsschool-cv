import React from 'react';
import { Box, Typography, Button, CardMedia } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './About.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box id="about" component="div" sx={{ marginTop: '15px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="about-container">
        <Box component="div" className="about-left-side">
          <Typography sx={{ fontSize: '42px', fontWeight: '600', lineHeight: '63px' }}>
            01 // {t('AboutMe.Title')}
          </Typography>
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
            <Button
              variant="contained"
              href="#skills"
              sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '40px', marginTop: '50px' }}
            >
              {t('AboutMe.SkillsBtn')}
            </Button>
          </Box>
        </Box>
        <Box component="div" className="about-right-side">
          <Typography
            sx={{ fontSize: '22px', fontWeight: '600', lineHeight: '43px', textAlign: 'right' }}
          >
            {t('AboutMe.MainText')}
          </Typography>
          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: '600',
              lineHeight: '33px',
              fontStyle: 'italic',
              marginTop: '50px',
              textAlign: 'right',
            }}
          >
            {t('AboutMe.MoreInfo')}
          </Typography>
          <Box component="div" className="player">
            <CardMedia
              component="iframe"
              src="https://www.youtube.com/embed/W5OqGDJf7jw"
              allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={t('AboutMe.VideoCV')}
              sx={{ width: '560px', height: '315px', border: 'none' }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
