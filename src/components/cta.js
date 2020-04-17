import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from './button';
import SectionHeader from './section-header';

const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <SectionHeader title={t('cta.title')} description={t('cta.content')} />
      <Button>{t('cta.button')}</Button>
    </div>
  );
};

export default CallToAction;
