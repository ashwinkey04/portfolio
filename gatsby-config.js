module.exports = {
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "dark-blue",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151591753-2",
      },
    },
  ],
  pathPrefix: "/portfolio",
  siteMetadata: {
    description: "Ashwin Ramakrishnan's Portfolio",
    locale: "en",
    url: "https://ashwinkey04.github.io/portfolio",
    image:"/images/profile.jpg",
    title: "Ashwin's portfolio",
    twitterUsername: "@ashwinkey04",
  },
}
