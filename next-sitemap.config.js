/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nycreport.org",
  generateIndexSitemap: false,
  sitemapFilename: "sitemap.xml",
  generateRobotsTxt: true,

  transform: async (config, path) => {
    const now = new Date().toISOString();
    const base = config.siteUrl;
    const WANDA_SLUG = "/politics/wanda-vazquez-bribery-case-dismissed-campaign-violation";

    if (path === "/") {
      return {
        loc: `${base}/`,
        lastmod: now,
        priority: 0.9,
      };
    }
    if (path === "/business") {
      return {
        loc: `${base}/business/`,
        lastmod: now,
        priority: 0.8,
      };
    }
    if (path === WANDA_SLUG) {
      return {
        loc: `${base}${WANDA_SLUG}/`,
        lastmod: now,
        priority: 1,
      };
    }
    return null;
  },
};