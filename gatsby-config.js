module.exports = {
    siteMetadata: {
        siteUrl: `https://www.jadechen170.github.io`,
        title: `Jade Chen`,
        description: `Personal Website`,
        author: `Jade Chen`,
    
        menuLinks: [
          {
            title: "Jade Chen",
            link: "/"
          },
          {
            title: "Projects",
            link: "/projects/"
          },
          {
            title: "Other Work",
            link: "/other-work/"
          },
          {
            title: "About",
            link: "/about/"
          }
        ],
    },
    flags: {
      DEV_SSR: true
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
              query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }
                  allSitePage {
                    nodes {
                      path
                    }
                  }
                }`,
      
              resolveSiteUrl: ({site, allSitePage}) => {
                //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
                return site.siteMetadata.siteUrl
              },
              serialize: ({ site, allSitePage }) =>
                allSitePage.nodes.map(node => {
                  return {
                    url: `${site.siteMetadata.siteUrl}${node.path}`,
                    changefreq: `yearly`,
                    priority: 0.7,
                  }
                })
            }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `Jade Chen`,
            short_name: `Jade Chen`,
            start_url: `/`,
            background_color: '#ECF3F9',
            theme_color: '#ECF3F9',
            display: `minimal-ui`,
            icon: `src/images/favicon.png`, // This path is relative to the root of the site.
          },
        },
    ]
}