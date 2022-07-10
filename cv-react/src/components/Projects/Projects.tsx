/* eslint-disable no-console */
import React, { useState } from 'react';
import { Box, Typography, Button, Link, CardMedia } from '@mui/material';
import { SiGithub } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';
import rslang from '../../assets/images/rslang.png';
import kanban from '../../assets/images/kanban.png';
import museum from '../../assets/images/museum.png';
import jsclock from '../../assets/images/js-clock.png';
import './Projects.scss';

const projects = [
  {
    id: '1',
    title: 'RSLang Project',
    info: 'Kanban is an application with extensive possibilities for creating and managing boards.',
    videoLink: 'uhNKQcdveew',
    projectLink: 'https://tarasiukdima.github.io/project-management-app/#/',
    stack:
      'React.js, Redux toolkit, Typescript, Sass, CICD, Material UI, i18next, react-beautiful-dnd, craco, react-hook-form, notistack, react-router',
  },
  {
    id: '2',
    title: 'Kanban application',
    info: 'Kanban is an application with extensive possibilities for creating and managing boards.',
    videoLink: 'uhNKQcdveew',
    projectLink: 'https://tarasiukdima.github.io/project-management-app/#/',
    stack:
      'React.js, Redux toolkit, Typescript, Sass, CICD, Material UI, i18next, react-beautiful-dnd, craco, react-hook-form, notistack, react-router',
  },
  {
    id: '3',
    title: 'Louvre project',
    info: 'Kanban is an application with extensive possibilities for creating and managing boards.',
    videoLink: 'uhNKQcdveew',
    projectLink: 'https://tarasiukdima.github.io/project-management-app/#/',
    stack:
      'React.js, Redux toolkit, Typescript, Sass, CICD, Material UI, i18next, react-beautiful-dnd, craco, react-hook-form, notistack, react-router',
  },
  {
    id: '4',
    title: 'JS Clock project',
    info: 'Kanban is an application with extensive possibilities for creating and managing boards.',
    videoLink: 'uhNKQcdveew',
    projectLink: 'https://tarasiukdima.github.io/project-management-app/#/',
    stack:
      'React.js, Redux toolkit, Typescript, Sass, CICD, Material UI, i18next, react-beautiful-dnd, craco, react-hook-form, notistack, react-router',
  },
];

interface ICard {
  id: string;
  title: string;
  info: string;
  videoLink: string;
  projectLink: string;
  stack: string;
}

const initialState = {
  id: '',
  title: '',
  info: '',
  videoLink: '',
  projectLink: '',
  stack: '',
};

const Projects = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clickedCard, setClickedCard] = useState<ICard>(initialState);
  const { t } = useTranslation();

  const handleClick = (id: string) => {
    const clickedCard = projects.find((x: { id: string }) => x.id === id) as ICard;
    setClickedCard(clickedCard);
    console.log(clickedCard);
  };

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
          <Box
            component="div"
            className="projects-list-item"
            // key="1"
            onClick={() => handleClick('1')}
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
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
              >
                RSLang project
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            className="projects-list-item"
            // key="2"
            onClick={() => handleClick('2')}
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
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
              >
                Kanban application
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            className="projects-list-item"
            // key="3"
            onClick={() => handleClick('3')}
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
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
              >
                Louvre project
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            className="projects-list-item"
            // key="4"
            onClick={() => handleClick('4')}
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
              <Typography
                sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px', marginTop: '10px' }}
              >
                JS Clock project
              </Typography>
            </Box>
          </Box>
        </Box>
        {projects.map((item) => (
          <Box component="div" className="projects-right" key={item.id}>
            <Typography
              sx={{
                textDecorationLine: 'underline',
                fontSize: '28px',
                fontWeight: '700',
                lineHeight: '42px',
                marginTop: '10px',
              }}
            >
              {item.title}
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
              {item.info}
            </Typography>
            <Box component="div" className="project-about">
              <CardMedia
                component="iframe"
                src={`https://www.youtube.com/embed/${item.videoLink}`}
                allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title={t('AboutMe.VideoCV')}
                sx={{ width: '480px', height: '343px', border: 'none' }}
              />
            </Box>
            <Link
              href={item.projectLink}
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
                {item.stack}
              </Typography>
            </Box>
          </Box>
        ))}
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
