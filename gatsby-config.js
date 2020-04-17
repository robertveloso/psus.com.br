const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Procedimentos SUS | Guia médico de bolso`,
    description: `Procedimento SUS é um app que auxilia os médicos brasileiros a navegar e pesquisar na lista oficial de procedimentos do Ministério da Saúde.`,
    author: `@robertveloso`,
    siteUrl: `https://psus.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `psus.com.br`,
        short_name: `psus`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        i18n: path.join(__dirname, 'src/i18n'),
        images: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`,
      },
    },
    /*
    `gatsby-plugin-sitemap`,
      this (optional) plugin enables Progressive Web App + Offline functionality
      To learn more, visit: https://gatsby.dev/offline
      `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
    */
  ],
};
