import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './Projects.scss';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box id="projects" component="div" sx={{ marginTop: '46px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="projects-container">
        <Typography sx={{ fontSize: '42px', fontWeight: '600', lineHeight: '63px' }}>
          04 // {t('Experience.Title')}
        </Typography>
      </Box>
      <Box component="div" className="projects-btn" sx={{ marginTop: '40px' }}>
        <Button
          variant="contained"
          href="#projects"
          sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '40px' }}
        >
          {t('Experience.ProjectsBtn')}
        </Button>
      </Box>
    </>
  );
};

export default Projects;
