// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UN Open GIS Initiative DWG7 on Smart Maps",
  tagline: "Keep web maps open for a better world",
  url: "https://unopengis.github.io",
  baseUrl: "/7-docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  i18n: {
    defaultLocale: 'en',
    locales: ['en','ja'],
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "unopengis", // Usually your GitHub org/user name.
  projectName: "7-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: "UN Open GIS",
        logo: {
          alt: "UN Open GIS Logo",
          src: "img/favicon.png"
        },
        items: [
          {
            to: "/docs/about",
            position: "left",
            label: "About"
          },
          {
            label: "Resources",
            position: "left",
            to: "/docs/resources"
          },
          {
            label: "Use Cases",
            position: "left",
            to: "/docs/use-cases"
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/unopengis/7-docs/",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/intro"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/unopengis"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog"
              },
              {
                label: "GitHub",
                href: "https://github.com/unopengis/"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`
      },
      colorMode: {
        disableSwitch: false,
        defaultMode: "light",
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '4HDXPXPFQ8',
  
        // Public API key: it is safe to commit it
        apiKey: '48c26edb9d6071ce2dfc5217afe2067d',
  
        indexName: '7',
  
        // Optional: see doc section below
        contextualSearch: true,
  
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),


  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid']
};

module.exports = config;
