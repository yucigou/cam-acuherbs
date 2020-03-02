module.exports = {
  siteMetadata: {
    title: `Cambridge Chinese Acupuncture & Herbs`,
    description: `Cambridge Chinese Acupuncture & Herbs is member of the Association of Traditional Chinese Medicine in the UK. Dr Li ZHANG has many years of clinical experiences both in China and the UK. You can contact us on +44(0)1223-412216, or visit us at 238 Mill Road, Cambridge, CB1 3NF, UK`,
    author: `Yuci Gou`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cambridge Chinese Acupuncture & Herbs`,
        short_name: `Cambridge Chinese Acupuncture & Herbs`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`
      }
    },
    `gatsby-plugin-offline`
  ]
};
