import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import {
  SiGitlab,
  SiMarkdown,
  SiWebpack,
  SiStyledcomponents,
  SiRedux,
  SiTypescript,
  SiMaterialui,
} from 'react-icons/si';
import {
  DiNodejsSmall,
  DiVisualstudio,
  DiIllustrator,
  DiTrello,
  DiPhotoshop,
  DiSass,
  DiNpm,
  DiGithubBadge,
  DiCss3,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiReact,
} from 'react-icons/di';
import { FaDiscord, FaFigma } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';
import './Skills.scss';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box id="skills" component="div" sx={{ marginTop: '44px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="skills-container">
        <Box component="div" className="skills-left-side">
          <Typography
            sx={{
              fontSize: '28px',
              fontWeight: '600',
              lineHeight: '42px',
              textAlign: 'center',
              marginBottom: '45px',
            }}
          >
            What I use in my work:
          </Typography>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '90px' }}>
                <DiReact />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <SiTypescript />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiJsBadge />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiCss3 />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiHtml5 />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '90px' }}>
                <DiGit />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '90px' }}>
                <DiGithubBadge />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <SiRedux />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiNodejsSmall />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiSass />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiNpm />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiVisualstudio />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiPhotoshop />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiIllustrator />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <FaFigma />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <DiTrello />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <SiGitlab />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <SiWebpack />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <SiMaterialui />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <SiMarkdown />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <SiStyledcomponents />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ size: '75px' }}>
                <FaDiscord />
              </IconContext.Provider>
            </Box>
          </Box>
        </Box>
        <Box component="div" className="skills-right-side">
          <Typography
            sx={{ fontSize: '42px', fontWeight: '600', lineHeight: '63px', marginBottom: '25px' }}
          >
            02 // {t('Skills.Title')}
          </Typography>
          <Box component="div" className="skills-name">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              React.js
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              TypeScript
            </Typography>
          </Box>
          <Box component="div" className="skills-name item-3pc">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              JavaScript
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              CSS
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              HTML
            </Typography>
          </Box>
          <Box component="div" className="skills-name">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Git
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              GitHub
            </Typography>
          </Box>
          <Box component="div" className="skills-name item-3pc">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Redux
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Node.JS
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Sass
            </Typography>
          </Box>
          <Box component="div" className="skills-name">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              npm
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              VSCode
            </Typography>
          </Box>
          <Box component="div" className="skills-name item-3pc">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              PhotoShop
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Illustrator
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Figma
            </Typography>
          </Box>
          <Box component="div" className="skills-name">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Trello
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              GitLab
            </Typography>
          </Box>
          <Box component="div" className="skills-name item-3pc">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Webpack
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              MaterialUI
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Markdown
            </Typography>
          </Box>
          <Box component="div" className="skills-name">
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              StyledComponents
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '42px' }}>
              Discord
            </Typography>
          </Box>
          <Box component="div" className="about-btn">
            <Button
              variant="contained"
              href="#workxp"
              sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '40px' }}
            >
              {t('Skills.WorkXPBtn')}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
