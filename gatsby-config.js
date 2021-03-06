module.exports = {
  siteMetadata: {
    title: `Itati Tapia`,
    description: `This is a porfolio where I upload some of my best albums, plus some information about me, so you can get to know me better.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Albums`,
        link: `/albums`,
      },
      {
        name: `Collections`,
        link: `/collections`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `albums`,
        path: `${__dirname}/content/albums`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `collections`,
        path: `${__dirname}/content/collections`,
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
        background_color: `#06B49A`,
        theme_color: `#06B49A`,
        display: `minimal-ui`,
      },
    },
    //My plugins
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-transformer-remark",
    `gatsby-plugin-styled-components`,
  ],
}
