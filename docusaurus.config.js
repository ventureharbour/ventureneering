const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "Venture Harbour Engineering",
  tagline: "Rapid development without the burn or churn",
  url: "https://ventureharbour.tech",
  baseUrl: "/",
  favicon: "favicon.ico",
  organizationName: "ventureharbour", // Usually your GitHub org/user name.
  projectName: "ventureneering", // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      defaultMode: "light",
    },
    navbar: {
      logo: {
        alt: "VentureHarbour Engineering",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/blog",
          label: "Blog",
          position: "right",
          activeBasePath: "blog",
        },
        {
          to: "/careers/intro",
          label: "Career Framework",
          position: "right",
          activeBaseRegex: `/careers/`,
        },
        {
          to: "/showcase",
          activeBasePath: "showcase",
          label: "Showcase",
          position: "right",
        },
      ],
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "classic",
      {
        theme: {
          customCss: require.resolve("./src/scss/application.scss"),
        },
        blog: {
          path: "blog",
        },
        docs: {
          id: "careers",
          path: "careers",
          routeBasePath: "careers",
          editCurrentVersion: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
