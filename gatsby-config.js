module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Urbanist`,
            file: `https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5v6xa8lplxay`,
        accessToken: `1TgnyYAUkRBHDFFvUruWUd85votc6nPqgCaqyM_v_4w`,
      },
    },
  ]
}
