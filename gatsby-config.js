module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'UKC Website',
    },
    plugins: [
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images', // This was here by default, I have no idea what it does - Simon
        },
        '@chakra-ui/gatsby-plugin',
        'gatsby-plugin-graphql-codegen',
    ],
};
