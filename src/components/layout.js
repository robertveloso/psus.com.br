/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withTrans } from '../i18n/withTrans';

import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';

import Header from './header';
import Footer from './footer';
import '../styles/default.css';
import headerImage from '../images/header.png';

const Layout = ({ children, t }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <Header />
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTrans(Layout);
