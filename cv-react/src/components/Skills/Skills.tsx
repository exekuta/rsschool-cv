/* eslint-disable no-console */
import React, { useState } from 'react';
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
  const [isActive, setIsActive] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chosenCard, setChosenCard] = useState(-1);
  const { t } = useTranslation();

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  console.log(chosenCard);
  console.log(isActive);

  return (
    <>
      <Box id="skills" component="div" sx={{ marginTop: '44px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="skills-container">
        <Box component="div" className="skills-left-side">
          <Typography className="skills-left-side-features">{t('Skills.UsedFeatures')}</Typography>
          <Box component="div" className="skill-boxes">
            <Box
              component="div"
              className={`skill-item-box ${isActive && chosenCard === 1 ? 'active-box' : ''}`}
            >
              <IconContext.Provider value={{ className: 'react-icons-skills-90' }}>
                <DiReact />
              </IconContext.Provider>
            </Box>
            <Box
              component="div"
              className={`skill-item-box ${isActive && chosenCard === 2 ? 'active-box' : ''}`}
            >
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <SiTypescript />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box
              component="div"
              className={`skill-item-box ${isActive && chosenCard === 3 ? 'active-box' : ''}`}
            >
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiJsBadge />
              </IconContext.Provider>
            </Box>
            <Box
              component="div"
              className={`skill-item-box ${isActive && chosenCard === 4 ? 'active-box' : ''}`}
            >
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiCss3 />
              </IconContext.Provider>
            </Box>
            <Box
              component="div"
              className={`skill-item-box ${isActive && chosenCard === 5 ? 'active-box' : ''}`}
            >
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiHtml5 />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-90' }}>
                <DiGit />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-90' }}>
                <DiGithubBadge />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <SiRedux />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiNodejsSmall />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiSass />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiNpm />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiVisualstudio />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiPhotoshop />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiIllustrator />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <FaFigma />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <DiTrello />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <SiGitlab />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <SiWebpack />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <SiMaterialui />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <SiMarkdown />
              </IconContext.Provider>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <SiStyledcomponents />
              </IconContext.Provider>
            </Box>
            <Box component="div" className="skill-item-box">
              <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                <FaDiscord />
              </IconContext.Provider>
            </Box>
          </Box>
        </Box>
        <Box component="div" className="skills-right-side">
          <Typography className="skills-right-side-title">02 // {t('Skills.Title')}</Typography>
          <Box component="div" className="skills-name">
            <Typography
              className="skills-right-side-item"
              onClick={() => {
                toggleActive();
                setChosenCard(1);
              }}
            >
              React.js
            </Typography>
            <Typography
              className="skills-right-side-item"
              onClick={() => {
                toggleActive();
                setChosenCard(2);
              }}
            >
              TypeScript
            </Typography>
          </Box>
          <Box component="div" className="skills-name item-3pc">
            <Typography
              className="skills-right-side-item"
              onClick={() => {
                toggleActive();
                setChosenCard(3);
              }}
            >
              JavaScript
            </Typography>
            <Typography
              className="skills-right-side-item"
              onClick={() => {
                toggleActive();
                setChosenCard(4);
              }}
            >
              CSS
            </Typography>
            <Typography
              className="skills-right-side-item"
              onClick={() => {
                toggleActive();
                setChosenCard(5);
              }}
            >
              HTML
            </Typography>
          </Box>
          <Box component="div" className="skills-name">
            <Typography className="skills-right-side-item">Git</Typography>
            <Typography className="skills-right-side-item">GitHub</Typography>
          </Box>
          <Box component="div" className="skills-name item-3pc">
            <Typography className="skills-right-side-item">Redux</Typography>
            <Typography className="skills-right-side-item">Node.JS</Typography>
            <Typography className="skills-right-side-item">Sass</Typography>
          </Box>
          <Box component="div" className="skills-name">
            <Typography className="skills-right-side-item">npm</Typography>
            <Typography className="skills-right-side-item">VSCode</Typography>
          </Box>
          <Box component="div" className="skills-name item-3pc">
            <Typography className="skills-right-side-item">PhotoShop</Typography>
            <Typography className="skills-right-side-item">Illustrator</Typography>
            <Typography className="skills-right-side-item">Figma</Typography>
          </Box>
          <Box component="div" className="skills-name">
            <Typography className="skills-right-side-item">Trello</Typography>
            <Typography className="skills-right-side-item">GitLab</Typography>
          </Box>
          <Box component="div" className="skills-name item-3pc">
            <Typography className="skills-right-side-item">Webpack</Typography>
            <Typography className="skills-right-side-item">MaterialUI</Typography>
            <Typography className="skills-right-side-item">Markdown</Typography>
          </Box>
          <Box component="div" className="skills-name">
            <Typography className="skills-right-side-item">StyledComponents</Typography>
            <Typography className="skills-right-side-item">Discord</Typography>
          </Box>
          <Box component="div" className="workxp-button-container">
            <Button variant="contained" href="#workxp" className="workxp-button">
              {t('Skills.WorkXPBtn')}
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Mobile version */}
      <Box component="section" className="skills-container-mobile">
        <Box component="div" className="skills-left-side">
          <Typography className="skills-right-side-title">02 // {t('Skills.Title')}</Typography>
          <Typography className="skills-left-side-features">{t('Skills.UsedFeatures')}</Typography>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-90' }}>
                  <DiReact />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">React.js</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <SiTypescript />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">TypeScript</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiJsBadge />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">JavaScript</Typography>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiCss3 />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">CSS</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiHtml5 />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">HTML</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-90' }}>
                  <DiGit />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Git</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-90' }}>
                  <DiGithubBadge />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">GitHub</Typography>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <SiRedux />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Redux</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiNodejsSmall />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Node.JS</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiSass />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Sass</Typography>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiNpm />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">npm</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiVisualstudio />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">VSCode</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiPhotoshop />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">PhotoShop</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiIllustrator />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Illustrator</Typography>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <FaFigma />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Figma</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <DiTrello />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Trello</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <SiGitlab />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">GitLab</Typography>
            </Box>
          </Box>
          <Box component="div" className="skill-boxes">
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <SiWebpack />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Webpack</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <SiMaterialui />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">MaterialUI</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <SiMarkdown />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Markdown</Typography>
            </Box>
            <Box component="div" className="skill-items-750">
              <Box component="div" className="skill-item-box">
                <IconContext.Provider value={{ className: 'react-icons-skills-75' }}>
                  <SiStyledcomponents />
                </IconContext.Provider>
              </Box>
              <Typography className="skills-right-side-item">Styled Components</Typography>
            </Box>
          </Box>
          <Box component="div" className="workxp-button-container">
            <Button variant="contained" href="#workxp" className="workxp-button">
              {t('Skills.WorkXPBtn')}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
