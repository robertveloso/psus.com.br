import React from 'react';
import { useTranslation } from 'react-i18next';

import feature from '../images/feature.png';
import SectionHeader from './section-header';
import { COLORS } from '../styles/constants';

const Content = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <SectionHeader
        title={t('content.title')}
        description={t('content.subtitle')}
      />
      <content
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 340px))',
        }}
      >
        <div>
          {' '}
          <p style={{ color: COLORS.gray }}>
            {' '}
            {t('content.content')
              .split('\n')
              .map(function (item) {
                return item;
              })}{' '}
          </p>{' '}
          <h3>★ ★ ★ ★ ★</h3>
          <p style={{ color: COLORS.gray }}>{t('content.sentence')}</p>
        </div>
        <div>
          <img
            src={feature}
            alt="a blank card floating over colorful graphics"
          />
        </div>
      </content>
    </div>
  );
};

export default Content;
