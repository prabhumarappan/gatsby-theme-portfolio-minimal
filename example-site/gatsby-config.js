module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-portfolio-minimal',
            options: {
                // siteUrl: "https://example.com", // Used for sitemap generation
                manifestSettings: {
                    favicon: './content/images/favicon.png', // Path is relative to the root
                    siteName: 'My Minimal Portfolio', // Used in manifest.json
                    shortName: 'Portfolio', // Used in manifest.json
                    startUrl: '/', // Used in manifest.json
                    backgroundColor: '#FFFFFF', // Used in manifest.json
                    themeColor: '#000000', // Used in manifest.json
                    display: 'minimal-ui', // Used in manifest.json
                },
                // googleAnalytics: {
                //     trackingId: "UA-XXXXXX-X",
                //     anonymize: true, // Default true
                //     environments: ["production", "development"] // Default ["production"]
                // }
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/markdown`,
                name: `markdown`,
            },
        },
        `gatsby-transformer-remark`,
    ],
};
