var dotenv = require('dotenv');
dotenv.config();

const { accessToken, spaceId, trackingId } = process.env;

module.exports = {
  siteMetadata: {
    title: `Byron Delpinal | Do. Write. Teach.`,
    description: `Software developer by trade and passion, my focus is to create stable, reliable, and performant web applications.`,
    author: `Byron Delpinal`,
    twitterHandle: '@ByronDelpinal',
    url: `https://byron.codes/`,
    siteUrl: `https://byron.codes/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken,
        spaceId,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/business/*`] },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId,
        head: true,
      },
    },
  ],
};
