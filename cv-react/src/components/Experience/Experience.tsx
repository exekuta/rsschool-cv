import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './Experience.scss';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box id="workxp" component="div" sx={{ marginTop: '46px' }}>
        <Typography sx={{ color: 'transparent' }}>Empty div for anchor link</Typography>
      </Box>
      <Box component="section" className="experience-container">
        <Typography sx={{ fontSize: '42px', fontWeight: '600', lineHeight: '63px' }}>
          03 // {t('Experience.Title')}
        </Typography>
        <Typography
          sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px', marginTop: '20px' }}
        >
          <strong>{t('Experience.WorkXP1')}</strong> {t('Experience.WorkXP1Text')}
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px' }}>
          <strong>{t('Experience.WorkXP2')}</strong> {t('Experience.WorkXP2Text')}
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px' }}>
          <strong>{t('Experience.WorkXP3')}</strong> {t('Experience.WorkXP3Text')}
        </Typography>
        <Typography
          sx={{ fontSize: '42px', fontWeight: '600', lineHeight: '63px', marginTop: '20px' }}
        >
          03 // {t('Experience.Education')}
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px' }}>
          <strong>{t('Experience.Education1')}</strong> {t('Experience.Education1Text')}
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px' }}>
          <strong>{t('Experience.Education2')}</strong> {t('Experience.Education2Text')}
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px' }}>
          <strong>{t('Experience.Education3')}</strong> {t('Experience.Education3Text')} -{' '}
          <strong>
            <Link>certificate</Link>
          </strong>
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px' }}>
          <strong>{t('Experience.Education4')}</strong> {t('Experience.Education4Text')} -{' '}
          <strong>
            <Link href="https://app.rs.school/certificate/wxae40ws">certificate</Link>
          </strong>
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px' }}>
          {t('Experience.Education5')}
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '42px' }}>
          {t('Experience.Education6')}
        </Typography>
        <Typography
          sx={{ fontSize: '42px', fontWeight: '600', lineHeight: '63px', marginTop: '20px' }}
        >
          03 // {t('Experience.Languages')}
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px' }}>
          <strong>{t('Experience.Languages1')}</strong> {t('Experience.Languages1Text')}
        </Typography>
        <Typography sx={{ fontSize: '28px', fontWeight: '400', lineHeight: '42px' }}>
          <strong>{t('Experience.Languages2Text')}</strong>
        </Typography>
        <Box component="div" className="projects-btn" sx={{ marginTop: '40px' }}>
          <Button
            variant="contained"
            href="#projects"
            sx={{ fontSize: '28px', fontWeight: '800', lineHeight: '40px' }}
          >
            {t('Experience.ProjectsBtn')}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
