import React from 'react';
import { useTranslation } from 'react-i18next';

import MockupIphone from '../images/mockup-iphone.png';
import appStore from '../images/appStore.png';
import googlePlay from '../images/googlePlay.png';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ textAlign: 'center' }}> {t('header.title')}</h1>
      <p style={{ textAlign: 'center', maxWidth: 440 }}>
        {t('header.subtitle')}
      </p>
      <p>{t('header.cta')}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <a href="#">
          <img
            style={{ paddingRight: '35px' }}
            src={appStore}
            alt="Apple App Store"
          />
        </a>
        <a href="#">
          <img src={googlePlay} alt="Google Play Store" />
        </a>
      </div>
      <img src={MockupIphone} alt="Iphone screen" />
    </div>
  );
};

export default Hero;
