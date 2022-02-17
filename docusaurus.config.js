module.exports = {
  title: "Venture Harbour Engineering",
  tagline: "Rapid development without the burn or churn",
  url: "https://ventureharbour.tech",
  baseUrl: "/",
  favicon: "favicon.ico",
  organizationName: "ventureharbour", // Usually your GitHub org/user name.
  projectName: "ventureneering", // Usually your repo name.
  scripts: [
    {
      src: "https://buttons.github.io/buttons.js",
      async: true,
      defer: true,
    },
  ],
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      logo: {
        alt: "VentureHarbour Engineering",
        src: "img/logo.svg",
      },
      links: [
        // {
        //   to: "/about",
        //   label: "Our Team",
        //   position: "right",
        //   activeBasePath: "about",
        // },
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
      theme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["php"],
    },
    algolia: {
      apiKey: "7251e88091c8043963e1b5f720784455",
      indexName: "dev_ventureneering",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/scss/application.scss"),
        },
        blog: {
          path: "blog",
          authorsMapPath: "./blog/authors.yml",
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "careers",
        path: "careers",
        routeBasePath: "careers",
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: "weekly",
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
  customFields: {
    keywords: [
      "wordpress tools",
      "development tools",
      "wordpress project",
      "Gutenberg blocks",
      "development kit",
      "wordpress kit",
    ],
    image: "img-why-boilerplate@2x.png",
  },
};
