module.exports = {
  siteMetadata: {
    title: "My Portfolio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `featuredWorks`,
        path: `${__dirname}/featuredWorks`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
