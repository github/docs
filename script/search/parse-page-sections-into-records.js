#!/usr/bin/env node
import { maxContentLength } from '../../lib/search/config.js'

// This module takes cheerio page object and divides it into sections
// using H1,H2 heading elements as section delimiters. The text
// that follows each heading becomes the content of the search record.

const ignoredHeadingSlugs = ['in-this-article', 'further-reading', 'prerequisites']

export default function parsePageSectionsIntoRecords(page) {
  const { href, $, languageCode } = page
  const title = $('h1').first().text().trim()
  const breadcrumbsArray = $('[data-search=breadcrumbs] nav.breadcrumbs a')
    .map((i, el) => {
      return $(el).text().trim().replace('/', '').replace(/\s+/g, ' ')
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

  const objectID = href

  const rootSelector = '[data-search=article-body]'
  const $root = $(rootSelector)

  const $sections = $('h2', $root)
    .filter('[id]')
    .filter((i, el) => {
      return !ignoredHeadingSlugs.includes($(el).attr('id'))
    })

  const headings = $sections
    .map((i, el) => $(el).text())
    .get()
    .join(' ')
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
    body = getAllText($, $root)
  }

  if (!body && !intro) {
    console.warn(`${objectID} has no body and no intro.`)
  }

  if (languageCode !== 'en' && body.length > maxContentLength) {
    body = body.slice(0, maxContentLength)
  }

  const content = `${intro}\n${body}`.trim()

  return {
    objectID,
    breadcrumbs,
    title,
    headings,
    content,
    topics,
  }
}

function getAllText($, $root) {
  let text = ''

  // We need this so we can know if we processed, for example,
  // a <td> followed by a <p> because if that's the case, don't use
  // a ' ' to concatenate the texts together but a '\n' instead.
  // That means, given this input:
  //
  //    <p>Bla</p><table><tr><td>Foo</td><td>Bar</td></table><p>Hi again</p>
  //
  // we can produce this outcome:
  //
  //    'Bla\nFoo Bar\nHi again'
  //
  let previousTagName = ''

  $('p, h2, h3, td, pre, li', $root).each((i, element) => {
    const $element = $(element)
    if (previousTagName === 'td' && element.tagName !== 'td') {
      text += '\n'
    }
    // Because our cheerio selector is all the block level tags,
    // what you might end up with is, from:
    //
    //   <li><p>Text</p></li>
    //   <li><pre>Code</pre></li>
    //
    //   ['Text', 'Text', 'Code', 'Code']
    //
    // because it will spot both the <li> and the <p>.
    // If all HTML was exactly like that, you could omit the <li> selector,
    // but a lot of HTML is like this:
    //
    //    <li>Bare text<li>
    //
    // So we need to bail if we're inside a block level element whose parent
    // already was a <li>.
    if ((element.tagName === 'p' || element.tagName === 'pre') && element.parent.tagName === 'li') {
      return
    }
    text += $element.text()
    if (element.tagName === 'td') {
      text += ' '
    } else {
      text += '\n'
    }
    previousTagName = element.tagName
  })
  text = text.trim().replace(/\s*[\r\n]+/g, '\n')

  return text
}
