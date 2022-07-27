import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import certificate from '../../assets/images/certificate.jpg';
import './Experience.scss';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box id="workxp" component="div" sx={{ marginTop: '46px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="experience-container">
        <Typography className="experience-title">03 // {t('Experience.Title')}</Typography>
        <Typography className="experience-text margin">
          <strong>{t('Experience.WorkXP1')}</strong> {t('Experience.WorkXP1Text')}
        </Typography>
        <Typography className="experience-text">
          <strong>{t('Experience.WorkXP2')}</strong> {t('Experience.WorkXP2Text')}
        </Typography>
        <Typography className="experience-text">
          <strong>{t('Experience.WorkXP3')}</strong> {t('Experience.WorkXP3Text')}
        </Typography>
        <Typography className="experience-title margin">
          03 // {t('Experience.Education')}
        </Typography>
        <Typography className="experience-text">
          <strong>{t('Experience.Education1')}</strong> {t('Experience.Education1Text')}
        </Typography>
        <Typography className="experience-text">
          <strong>{t('Experience.Education2')}</strong> {t('Experience.Education2Text')}
        </Typography>
        <Typography className="experience-text">
          <strong>{t('Experience.Education3')}</strong> {t('Experience.Education3Text')} -{' '}
          <strong>
            <Link href={certificate} target="_blank">
              {t('Experience.Certificate')}
            </Link>
          </strong>
        </Typography>
        <Typography className="experience-text">
          <strong>{t('Experience.Education4')}</strong> {t('Experience.Education4Text')} -{' '}
          <strong>
            <Link href="https://app.rs.school/certificate/wxae40ws" target="_blank">
              {t('Experience.Certificate')}
            </Link>
          </strong>
        </Typography>
        <Typography className="experience-text bold">{t('Experience.Education5')}</Typography>
        <Typography className="experience-text bold">{t('Experience.Education6')}</Typography>
        <Typography className="experience-title margin">
          03 // {t('Experience.Languages')}
        </Typography>
        <Typography className="experience-text">
          <strong>{t('Experience.Languages1')}</strong> {t('Experience.Languages1Text')}
        </Typography>
        <Typography className="experience-text">
          <strong>{t('Experience.Languages2Text')}</strong>
        </Typography>
        <Box component="div" className="projects-btn-container" sx={{ marginTop: '40px' }}>
          <Button variant="contained" href="#projects" className="projects-btn">
            {t('Experience.ProjectsBtn')}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
