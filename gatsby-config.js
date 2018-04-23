module.exports = {
  siteMetadata: {
    title: 'Plug'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-styled-components'
  ]
};
