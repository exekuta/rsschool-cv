import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

import { useTranslation } from 'react-i18next';
import rslang from '../../assets/images/rslang.png';
import kanban from '../../assets/images/kanban.png';
import museum from '../../assets/images/museum.png';
import jsclock from '../../assets/images/js-clock.png';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Projects.scss';

const Projects = () => {
  const [clickedCard, setClickedCard] = useState(1);
  const { t } = useTranslation();

  return (
    <>
      <Box id="projects" component="div" sx={{ marginTop: '53px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="projects-container">
        <Typography className="projects-title">04 // {t('Projects.Title')}</Typography>
      </Box>
      <Box component="div" className="projects">
        <Box component="div" className="projects-left-list">
          <Box
            component="div"
            className="projects-list-item"
            onClick={() => {
              setClickedCard(1);
            }}
          >
            <Box component="div" className="projects-list-item-box">
              <Box
                component="img"
                alt="Kanban application"
                src={kanban}
                className="projects-list-item-img"
              ></Box>
            </Box>
            <Box component="div">
              <Typography className="projects-item-title">{t('Projects.Project1Title')}</Typography>
            </Box>
          </Box>
          <Box
            component="div"
            className="projects-list-item"
            onClick={() => {
              setClickedCard(2);
            }}
          >
            <Box component="div" className="projects-list-item-box">
              <Box
                component="img"
                alt="RSLang project"
                src={rslang}
                className="projects-list-item-img"
              ></Box>
            </Box>
            <Box component="div">
              <Typography className="projects-item-title">{t('Projects.Project2Title')}</Typography>
            </Box>
          </Box>
          <Box
            component="div"
            className="projects-list-item"
            onClick={() => {
              setClickedCard(3);
            }}
          >
            <Box component="div" className="projects-list-item-box">
              <Box
                component="img"
                alt="Louvre project"
                src={museum}
                className="projects-list-item-img"
              ></Box>
            </Box>
            <Box component="div">
              <Typography className="projects-item-title">{t('Projects.Project3Title')}</Typography>
            </Box>
          </Box>
          <Box
            component="div"
            className="projects-list-item"
            onClick={() => {
              setClickedCard(4);
            }}
          >
            <Box component="div" className="projects-list-item-box">
              <Box
                component="img"
                alt="JS Clock project"
                src={jsclock}
                className="projects-list-item-img"
              ></Box>
            </Box>
            <Box component="div">
              <Typography className="projects-item-title">{t('Projects.Project4Title')}</Typography>
            </Box>
          </Box>
        </Box>
        <ProjectItem clickedCard={clickedCard} />
      </Box>

      <Box component="div"></Box>
      <Box component="div" className="footer-btn-container" sx={{ marginTop: '20px' }}>
        <Button variant="contained" href="#top" className="footer-btn">
          {t('Projects.TopBtn')}
        </Button>
      </Box>
    </>
  );
};

export default Projects;
