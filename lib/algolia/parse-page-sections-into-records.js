// This module takes cheerio page object and divides it into sections
// using H1,h2,h3 heading elements as section delimiters. The text
// that follows each heading becomes the content of the searh record.

const { chain } = require('lodash')
const urlPrefix = 'https://docs.github.com'
const AlgoliaIndex = require('./search-index')
const ignoredHeadingSlugs = [
  'in-this-article',
  'further-reading'
]

module.exports = function parsePageSectionsIntoRecords (href, $) {
  const title = $('h1').text().trim()
  const breadcrumbs = $('nav.breadcrumbs a')
    .map((i, el) => {
      return $(el)
        .text()
        .trim()
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
    })
    .get()
    .join(' / ')

  let records

  const $sections = $('.article-grid-body h3')
    .filter('[id]')
    .filter((i, el) => {
      return !ignoredHeadingSlugs.includes($(el).attr('id'))
    })

  if ($sections.length > 0) {
    records = $sections
      .map((i, el) => {
        const heading = $(el).text().trim()
        const slug = $(el).attr('id')
        const objectID = [href, slug].join('#')
        const url = [urlPrefix, objectID].join('')
        const content = $(el)
          // Platform-specific content is nested in a DIV
          // GraphQL content in nested in two DIVS
          .nextUntil('h2, h3, div > h2, div > h3, div > div > h2, div > div > h3')
          .map((i, el) => $(el).text())
          .get()
          .join(' ')
          .trim()
          .slice(0, AlgoliaIndex.maxContentLength)
        return {
          objectID,
          url,
          slug,
          breadcrumbs,
          heading,
          title,
          content
        }
      })
      .get()
  } else {
    // There are no sections. Treat the entire article as the record.
    const objectID = href
    const url = [urlPrefix, objectID].join('')
    const content = $('.article-grid-body p, .article-grid-body ul, .article-grid-body ol, .article-grid-body table')
      .map((i, el) => $(el).text())
      .get()
      .join(' ')
      .trim()
      .slice(0, AlgoliaIndex.maxContentLength)

    records = [{
      objectID,
      url,
      breadcrumbs,
      title,
      content
    }]
  }

  return chain(records)
    .uniqBy('objectID')
    .value()
}
