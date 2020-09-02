'use strict'
/* eslint-env node */

const { join } = require('path')

/**
 * @param {array} opt.disallowBotNames List of bot names to disallow
 * @param {string} opt.sitemapUrl Sitemap.xml URL
 * @param {string} opt.path Deploy path
 */
module.exports = async(fileMap, opt) => {
  let disallow

  if (opt.disallowBotNames) {
    disallow = opt.disallowBotNames
      .map(botName => `User-agent: ${botName}\nDisallow: /`)
  }

  const content = [
    ...disallow,
    '', // Extra newline
    `Sitemap: ${opt.sitemapUrl}`
  ].join('\n')

  const fullPath = join(opt.path, 'robots.txt')

  fileMap.set(fullPath, content)
}
