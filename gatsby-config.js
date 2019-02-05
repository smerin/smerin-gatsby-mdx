module.exports = {
  siteMetadata: {
    title: "Standard title",
    titleTemplate: "%s | George Smerin",
    description: "This is my cool blog",
    url: "https://www.smerin.com",
    image: "/images/george.jpg",
    twitterUsername: "@georgesmerin"
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-mdx",
      options: {
        extensions: [".mdx", ".md"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/styles/typography"
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://smerin.us7.list-manage.com/subscribe/post?u=a0980efdba90a553e9659ac7e&amp;id=b2e86e08f0"
      }
    }
  ]
};
