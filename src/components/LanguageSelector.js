import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ onSelectLanguage }) => {
  const { t } = useTranslation();

  return (
    <div className="language-selector-overlay">
      <div className="language-selector-modal">
        <h2>{t('common.languageSelect')}</h2>
        <div className="language-buttons">
          <button onClick={() => onSelectLanguage('en')}>
            🇬🇧 {t('common.english')}
          </button>
          <button onClick={() => onSelectLanguage('pt')}>
            🇵🇹 {t('common.portuguese')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;