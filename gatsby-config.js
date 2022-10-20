module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
  ]
}
