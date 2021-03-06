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
        short_name: `Cam-AcuHerbs`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `standalone`,
        icons: [
          {
            src: '/images/cropped-Acupuncture-1-620x340-2-32x32.png',
            type: 'image/png',
            sizes: '32x32'
          },
          {
            src: '/images/cropped-Acupuncture-1-620x340-2-144x144.png',
            type: 'image/png',
            sizes: '144x144'
          },
          {
            src: '/images/cropped-Acupuncture-1-620x340-2-180x180.png',
            type: 'image/png',
            sizes: '180x180'
          },
          {
            src: '/images/cropped-Acupuncture-1-620x340-2-192x192.png',
            type: 'image/png',
            sizes: '192x192'
          },
          {
            src: '/images/cropped-Acupuncture-1-620x340-2-270x270.png',
            type: 'image/png',
            sizes: '270x270'
          },
          {
            src: '/images/cropped-Acupuncture-1-620x340-2-512x512.png',
            type: 'image/png',
            sizes: '512x512'
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
