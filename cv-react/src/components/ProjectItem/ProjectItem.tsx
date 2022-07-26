import React, { FC } from 'react';
import { Box, Typography, Link, CardMedia } from '@mui/material';
import { SiGithub } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';
import museum from '../../assets/images/museum-1.png';
import jsclock from '../../assets/images/js-clock.png';

interface ICardProps {
  clickedCard: number;
}

const ProjectItem: FC<ICardProps> = ({ clickedCard }) => {
  const { t } = useTranslation();
  const projects = [
    {
      id: '1',
      title: `${t('Projects.Project1Title')}`,
      info: `${t('Projects.Project1Info')}`,
      aboutLink: 'https://www.youtube.com/embed/uhNKQcdveew',
      projectLink: 'https://tarasiukdima.github.io/project-management-app/#/',
      stack:
        'React.js, Redux toolkit, Typescript, Sass, CI/CD, Material UI, i18next, react-beautiful-dnd, craco, react-hook-form, notistack, react-router, figma',
    },
    {
      id: '2',
      title: `${t('Projects.Project2Title')}`,
      info: `${t('Projects.Project2Info')}`,
      aboutLink: 'https://www.youtube.com/embed/JIraOR6E9sk',
      projectLink: 'https://rslang-exekuta.netlify.app/',
      stack:
        'React.js, Redux toolkit, Typescript, styled components, chart.js, husky, react-hook-form, react-router, figma',
    },
    {
      id: '3',
      title: `${t('Projects.Project3Title')}`,
      info: `${t('Projects.Project3Info')}`,
      aboutLink: `${museum}`,
      projectLink: 'https://rolling-scopes-school.github.io/exekuta-JSFE2021Q3/museum-dom/',
      stack: 'JavaScript, HTML5, CSS3, js-swiper, custom video player',
    },
    {
      id: '4',
      title: `${t('Projects.Project4Title')}`,
      info: `${t('Projects.Project4Info')}`,
      aboutLink: `${jsclock}`,
      projectLink: 'https://rolling-scopes-school.github.io/exekuta-JSFEPRESCHOOL/js-clock/',
      stack: 'JavaScript, HTML5, CSS3',
    },
  ];
  const cardItem = projects[clickedCard - 1];

  return (
    <>
      {/* MAIN */}
      <Box component="div" className="projects-right" key={cardItem.id}>
        <Typography className="project-title">{cardItem.title}</Typography>
        <Typography className="project-info">{cardItem.info}</Typography>
        <Box component="div" className="project-about">
          {clickedCard > 2 ? (
            <Box
              component="img"
              alt={cardItem.title}
              src={cardItem.aboutLink}
              sx={{ maxHeight: '100%' }}
            ></Box>
          ) : (
            <CardMedia
              component="iframe"
              src={cardItem.aboutLink}
              allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={cardItem.title}
              sx={{ width: '100%', height: '100%', border: 'none' }}
            />
          )}
        </Box>
        <Link href={cardItem.projectLink} className="project-title">
          {t('Projects.LinkTo')}
          <IconContext.Provider value={{ size: '35px' }}>
            <SiGithub />
          </IconContext.Provider>
        </Link>
        <Box component="div" className="project-stack-container">
          <Typography
            className="project-stack bold"
            sx={{
              width: '10%',
            }}
          >
            {t('Projects.Stack')}
          </Typography>
          <Typography
            className="project-stack"
            sx={{
              width: '60%',
            }}
          >
            {cardItem.stack}
          </Typography>
        </Box>
      </Box>

      {/* AFTER 1200PX */}
      <Box component="div" className="projects-right-after-1200px" key={cardItem.id}>
        <Typography className="project-title">{cardItem.title}</Typography>
        <Typography className="project-info">{cardItem.info}</Typography>
        <Box component="div" className="project-about-container">
          <Box component="div" className="container-with-link">
            <Box component="div" className="project-about">
              {clickedCard > 2 ? (
                <Box
                  component="img"
                  alt={cardItem.title}
                  src={cardItem.aboutLink}
                  sx={{ maxHeight: '100%' }}
                ></Box>
              ) : (
                <CardMedia
                  component="iframe"
                  src={cardItem.aboutLink}
                  allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={cardItem.title}
                  sx={{ width: '100%', height: '100%', border: 'none' }}
                />
              )}
            </Box>
            <Link href={cardItem.projectLink} className="project-title">
              {t('Projects.LinkTo')}
              <IconContext.Provider value={{ size: '35px' }}>
                <SiGithub />
              </IconContext.Provider>
            </Link>
          </Box>

          <Box component="div" className="project-stack-container">
            <Typography
              className="project-stack bold"
              sx={{
                width: '10%',
              }}
            >
              {t('Projects.Stack')}
            </Typography>
            <Typography
              className="project-stack"
              sx={{
                width: '60%',
              }}
            >
              {cardItem.stack}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectItem;
