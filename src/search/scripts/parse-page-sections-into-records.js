#!/usr/bin/env node
import { render } from 'cheerio-to-text'

// This module takes cheerio page object and divides it into sections
// using H1,H2 heading elements as section delimiters. The text
// that follows each heading becomes the content of the search record.

const ignoredHeadingSlugs = ['in-this-article', 'further-reading', 'prerequisites']

export default function parsePageSectionsIntoRecords(page) {
  const { href, $ } = page
  const title = $('h1').first().text().trim()
  const breadcrumbsArray = $('[data-search=breadcrumbs] nav.breadcrumbs a')
    .map((i, el) => {
      return $(el).text().trim().replace('/', '').replace(/\s+/g, ' ')
    })
    .get()

  // Like in printing from DOM, some elements should not be included in
  // the records for search. This might be navigational elements of the
  // page that don't make much sense to find in a site search.
  $('[data-search=hide]').remove()

  // Only slice off the last one if the length of the array is greater
  // that 1.
  // On an article page, we the breadcrumbs array will be something
  // like:
  //
  //   ['Product short title', 'Map topic', 'Article title']
  //
  // But on a product landing page, it'll just be:
  //
  //   ['Product short title']
  //
  // So here, if we skip the last one we get nothing for the breadcrumb.
  const breadcrumbs =
    breadcrumbsArray
      .slice(0, breadcrumbsArray.length > 1 ? -1 : breadcrumbsArray.length)
      .join(' / ') || ''

  const toplevel = breadcrumbsArray[0] || ''
  const objectID = href

  const rootSelector = '[data-search=article-body]'
  const $root = $(rootSelector)
  if ($root.length === 0) {
    console.warn(`${href} has no '${rootSelector}'`)
  } else if ($root.length > 1) {
    console.warn(`${href} has more than one '${rootSelector}' (${$root.length})`)
  }

  const $sections = $('h2', $root)
    .filter('[id]')
    .filter((i, el) => {
      return !ignoredHeadingSlugs.includes($(el).attr('id'))
    })

  const headings = $sections
    .map((i, el) => $(el).text())
    .get()
    .join('\n')
    .trim()

  const intro = $('[data-search=lead] p').text().trim()

  let body = ''
  // Typical example pages with no `$root` are:
  // https://docs.github.com/en/code-security/guides or
  // https://docs.github.com/en/graphql/overview/explorer
  //
  // We need to avoid these because if you use `getAllText()` on these
  // pages, it will extract *everything* from the page, which will
  // include the side bar and footer.
  // TODO: Come up a custom solution to extract some text from these
  // pages that yields some decent content to be searched on, because
  // when you view these pages in a browser, there's clearly text there.
  if ($root.length > 0) {
    body = render($root)
  }

  if (!body && !intro) {
    console.warn(`${objectID} has no body and no intro.`)
  }

  const content =
    intro && !body.includes(intro.trim()) ? `${intro.trim()}\n${body.trim()}`.trim() : body.trim()

  return {
    objectID,
    breadcrumbs,
    title,
    headings,
    content,
    intro,
    toplevel,
  }
}
