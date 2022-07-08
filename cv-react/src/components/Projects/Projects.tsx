import React from 'react';
import { Box, Typography, Button, Link, CardMedia } from '@mui/material';
import { SiGithub } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';
import './Projects.scss';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box id="projects" component="div" sx={{ marginTop: '53px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="projects-container">
        <Typography
          sx={{ fontSize: '42px', fontWeight: '600', lineHeight: '63px', marginBottom: '20px' }}
        >
          04 // {t('Projects.Title')}
        </Typography>
      </Box>
      <Box component="div" className="projects">
        <Box component="div" className="projects-left-list">
          <Box component="div" className="projects-list-item">
            <Box component="div" className="projects-list-item-box"></Box>
            <Box component="div">
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
              >
                RSLang project
              </Typography>
            </Box>
          </Box>
          <Box component="div" className="projects-list-item">
            <Box component="div" className="projects-list-item-box"></Box>
            <Box component="div">
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
              >
                Kanban application
              </Typography>
            </Box>
          </Box>
          <Box component="div" className="projects-list-item">
            <Box component="div" className="projects-list-item-box"></Box>
            <Box component="div">
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
              >
                Louvre project
              </Typography>
            </Box>
          </Box>
          <Box component="div" className="projects-list-item">
            <Box component="div" className="projects-list-item-box"></Box>
            <Box component="div">
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
              >
                Momentum project
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box component="div" className="projects-right">
          <Typography
            sx={{
              textDecorationLine: 'underline',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '42px',
              marginTop: '10px',
            }}
          >
            Kanban application
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '27px',
              marginTop: '10px',
              textAlign: 'center',
              width: '80%',
            }}
          >
            Kanban is an application with extensive possibilities for creating and managing boards.
          </Typography>
          <Box component="div" className="project-about">
            <CardMedia
              component="iframe"
              src="https://www.youtube.com/embed/uhNKQcdveew"
              allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={t('AboutMe.VideoCV')}
              sx={{ width: '480px', height: '343px', border: 'none' }}
            />
          </Box>
          <Link
            href="https://tarasiukdima.github.io/project-management-app/#/"
            sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
          >
            Link to project
            <IconContext.Provider value={{ size: '35px' }}>
              <SiGithub />
            </IconContext.Provider>
          </Link>
          <Box component="div" className="project-stack">
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '27px',
                marginTop: '10px',
                textAlign: 'center',
                width: '10%',
              }}
            >
              Stack:
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '27px',
                marginTop: '10px',
                textAlign: 'center',
                width: '60%',
              }}
            >
              React.js, Redux toolkit, Typescript, Sass, CI\CD, Material UI, i18next,
              react-beautiful-dnd, craco, react-hook-form, notistack, react-router
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box component="div"></Box>
      <Box component="div" className="projects-btn" sx={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          href="#top"
          sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '40px' }}
        >
          {t('Projects.TopBtn')}
        </Button>
      </Box>
    </>
  );
};

export default Projects;
