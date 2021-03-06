module.exports = {
  siteMetadata: {
    title: `Careplus`,
    description: `Profesionales en Pediatría,
                  ofrecemos perforación de orejas para bebes,
                  consulta domiciliaria,cursos online y venta de productos para
                  la salud.`,
    author: `Kevin Amaya Osorio`,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-plugin-sass`,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
