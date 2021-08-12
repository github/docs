#!/usr/bin/env node
import { chain } from 'lodash-es'
import { maxContentLength } from '../../lib/search/config.js'
// This module takes cheerio page object and divides it into sections
// using H1,H2 heading elements as section delimiters. The text
// that follows each heading becomes the content of the search record.

const urlPrefix = 'https://docs.github.com'
const ignoredHeadingSlugs = ['in-this-article', 'further-reading']

export default function parsePageSectionsIntoRecords(href, $) {
  const title = $('h1').text().trim()
  const breadcrumbsArray = $('nav.breadcrumbs a')
    .map((i, el) => {
      return $(el).text().trim().replace(/\n/g, ' ').replace(/\s+/g, ' ')
    })
    .get()
    .slice(0, -1)

  const breadcrumbs = breadcrumbsArray.join(' / ') || ''
  const metaKeywords = $('meta[name="keywords"]').attr('content')
  const topics = metaKeywords ? metaKeywords.split(',') : []

  const productName = breadcrumbsArray[0] || ''
  topics.push(productName)
  // Remove "github" to make filter queries shorter
  if (productName.includes('GitHub ')) {
    topics.push(productName.replace('GitHub ', ''))
  }

  let records

  const $sections = $('.markdown-body h2')
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
          .nextUntil('h2, div > h2, div > div > h2')
          .map((i, el) => $(el).text())
          .get()
          .join(' ')
          .trim()
          .slice(0, maxContentLength)
        return {
          objectID,
          url,
          slug,
          breadcrumbs,
          heading,
          title,
          content,
          topics,
        }
      })
      .get()
  } else {
    // There are no sections. Treat the entire article as the record.
    const objectID = href
    const url = [urlPrefix, objectID].join('')
    const content = $(
      '.article-grid-body p, .article-grid-body ul, .article-grid-body ol, .article-grid-body table'
    )
      .map((i, el) => $(el).text())
      .get()
      .join(' ')
      .trim()
      .slice(0, maxContentLength)

    records = [
      {
        objectID,
        url,
        breadcrumbs,
        title,
        content,
        topics,
      },
    ]
  }

  return chain(records).uniqBy('objectID').value()
}
