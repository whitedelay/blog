module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '679de938a596407ab5f2c037d0e086d8',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'from scratch',
  domain: 'whitedelay.vercel.app',
  author: 'Jiyeon Baek',

  // open graph metadata (optional)
  description: 'whitedelay dev blog',

  // social usernames (optional)
  github: 'whitedelay',
  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'whitedelay/blog',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': '2368abd0bfdf4bf19311f6dfbb58b792',
  }
}
