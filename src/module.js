'use strict'
/* eslint-env node */

const { join } = require('path')

/**
 * @param {array} opt.disallowedCrawlers List of crawlers to disallow
 * @param {array} opt.disallowedUrls List of relative URLs to disallow
 * @param {string} opt.sitemapUrl Sitemap.xml URL
 * @param {string} opt.path Deploy path
 */
module.exports = async(fileMap, opt) => {
  const rules = []

  if (opt.disallowedCrawlers) {
    rules.push(opt.disallowedCrawlers
      .map(crawlerName => [
        `User-agent: ${crawlerName}`,
        'Disallow: /',
      ]))
  }

  if (opt.disallowedUrls) {
    rules.push('User-agent: *',
      opt.disallowedUrls.map(url => `Disallow: ${url}`))
  }

  const content = [
    rules,
    '', // Extra newline
    `Sitemap: ${opt.sitemapUrl}`
  ].flat(3).join('\n')

  const fullPath = join(opt.path, 'robots.txt')

  fileMap.set(fullPath, content)
}
