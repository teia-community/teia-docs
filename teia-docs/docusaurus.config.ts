import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Teia Docs',
  tagline: 'Documentation for Teia',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://floydwilde.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/teia-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'teia-community', // Usually your GitHub org/user name.
  organizationName: 'floydwilde',
  projectName: 'teia-docs', // Usually your repo name.
  // Github pages adds a trailing slash to the base URL, so we need to set this
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/teia-community/teia-docs',
        },
          blog: false, // Disable the blog feature for now
        // blog: {
        //  showReadingTime: true,
        //  feedOptions: {
          //  type: ['rss', 'atom'],
          //  xslt: true,
        //  },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //  editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          //onInlineTags: 'warn',
          //onInlineAuthors: 'warn',
          //onUntruncatedBlogPosts: 'warn',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Teia Docs',
      logo: {
        alt: 'Teia Site Logo',
        src: 'img/teia_logo-dark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'teiaSidebar',
          position: 'left',
          label: 'Documentation',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/teia-community/teia-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Website',
              href: 'https://teia.art',
            },
            {
              label: 'Report Harassment or Scams',
              href: 'https://docs.google.com/forms/d/e/1FAIpQLSeuBmNJjTiROSbHXXiQ5e-ia6fFywHKZ7Dj4-7sZtyltGY3yA/viewform',
            },
            {
              label: 'Code',
              href: 'https://github.com/teia-community',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/7pZrPCcgnG',
            },
            {
              label: 'X',
              href: 'https://x.com/TeiaCommunity',
            },
            {
              label: 'Mastodon',
              href: 'https://mastodon.teia.art/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.teia.art/',
            },
            {
              label: 'About Teia',
              href: 'https://blog.teia.art/about',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Teia DAO LLC`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
