/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import { useTranslation } from 'react-i18next';

import { COLORS } from '../styles/constants';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        padding: '1rem',
        // backgroundColor: COLORS.lightGray,
      }}
    >
      <div
        sx={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'space-between',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 240px))',
          padding: '1rem 2rem',
          fontSize: '.85rem',
        }}
      >
        <div sx={{ color: COLORS.blue, fontWeight: 700 }}>
          <a
            sx={{ textDecoration: 'none', color: 'inherit' }}
            href="https://robertveloso.com/"
          >
            {t(`footer.contact`)}
          </a>
        </div>
        <div sx={{ color: COLORS.gray }}>
          © {new Date().getFullYear()}
          {` `}
          pSUS
          <br />
          {t(`footer.copyright`)} ♡{' '}
          <a
            sx={{ textDecoration: 'none', color: COLORS.blue }}
            href="https://velosodigital.com"
          >
            Veloso Digital
          </a>{' '}
          🚀
        </div>
      </div>
    </footer>
  );
}

export default Footer;
