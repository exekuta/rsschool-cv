import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageToggler = () => {
  const { i18n, t } = useTranslation();

  const handleLanguagePick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ToggleButtonGroup color="primary" aria-label={t('Header.BtnGroupAriaLabel')}>
      <ToggleButton onClick={() => handleLanguagePick('en')} value="en">
        {t('Header.LanguageEn')}
      </ToggleButton>
      <ToggleButton onClick={() => handleLanguagePick('ru')} value="ru">
        {t('Header.LanguageRu')}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageToggler;
