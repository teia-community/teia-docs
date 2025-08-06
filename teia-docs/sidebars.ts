import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  teiaSidebar: [
    {
      type: 'category',
      label: 'General',
      items: [
        // 'home',
        'core-values-code-of-conduct-terms-and-conditions',
        'governance-on-teia',
        'core-team',
        'user-safety',
      ],
    },
    {
      type: 'category',
      label: 'Copyright, Moderation, Restrictions',
      items: [
        {
          type: 'link',
          label: 'Report Harassment or Scams',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSeuBmNJjTiROSbHXXiQ5e-ia6fFywHKZ7Dj4-7sZtyltGY3yA/viewform',
        },
        {
          type: 'link',
          label: 'Account restrictions / Rules (report abuse/request unban)',
          href: '/teia-docs/docs/core-values-code-of-conduct-terms-and-conditions#content-moderation',
        },
        'copyright-and-license-guide',
        'collecting-nfts-safely',
      ],
    },
//    {
//      type: 'category',
//      label: 'Getting Started',
//      items: [
        // 'getting-started-with-tezos',
        // 'how-to-mint',
        // 'how-to-swap',
        // 'how-to-cancel',
        // 'how-to-burn',
        // 'how-to-resell',
//      ],
//    },
//    {
//      type: 'category',
//      label: 'How-Tos',
//      items: [
//        // 'edit-your-profile',
        // 'interactive-objkts',
        // 'collab-contract-guide',
//      ],
//    },
//    {
//      type: 'category',
//      label: 'Dev How-Tos',
//      items: [
        // 'how-to-set-up-a-teia-mirror',
        // 'contribute-to-the-teia-code',
        // 'indexer-changes-for-teia',
//      ],
//    },
//    {
//      type: 'category',
//      label: 'FAQs',
//      items: [
        // 'general-faqs',
        // 'troubleshooting',
        // 'marketplace-fees',
        // 'visibility-of-teia-swaps',
//      ],
//    },
//    {
//      type: 'category',
//      label: 'Charity Initiatives',
//      items: [
        // 'tezquakeaid',
        // 'tezos-for-iran',
        // 'pakistan-fundraiser',
        // 'tezospride',
        // 'ukranian-fundraising',
        // 'advanced-splits-on-objktcom-for-fundraisers',
        // 'draft-on-public-domain-minting',
//      ],
//    },
    {
      type: 'category',
      label: 'Resources/Lists',
      items: [
        // 'resources-articles-essays-blogposts',
        // 'teia-multisig-wallets',
        // 'mirror-list',
        // 'ipfs-pinning',
        'community-tools',
      ],
    },
  ],
};

export default sidebars;
