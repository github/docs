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
    body = getAllText($root)
  }

  if (!body && !intro) {
    console.warn(`${objectID} has no body and no intro.`)
  }

  // These below lines can be deleted (along with the `maxContentLength`
  // config) once we've stopped generating Lunr indexes on disk that
  // we store as Git LFS.
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

function getAllText($root) {
  const inlineElements = new Set(
    `a,abbr,acronym,audio,b,bdi,bdo,big,br,button,canvas,cite,code,data,
    datalist,del,dfn,em,embed,i,iframe,img,input,ins,kbd,label,map,mark,
    meter,noscript,object,output,picture,progress,q,ruby,s,samp,script,
    select,slot,small,span,strong,sub,sup,svg,template,textarea,time,
    tt,u,var,video,wbr`
      .split(',')
      .map((s) => s.trim())
  )

  const walkTree = (node, callback, index = 0, level = 0) => {
    callback(node, index, level)
    for (let i = 0; i < (node.children || []).length; i++) {
      walkTree(node.children[i], callback, i, ++level)
      level--
    }
  }

  const fragments = []

  walkTree($root[0], (element) => {
    if (element.name === 'body') return

    if (element.type === 'text') {
      const parentElement = element.parent || {}
      const previousElement = element.prev || {}
      let { data } = element
      if (data.trim()) {
        if (!inlineElements.has(parentElement.name) && !inlineElements.has(previousElement.name)) {
          data = `\n${data}`
        }
        fragments.push(data)
      }
    }
  })

  return fragments.join('').trim()
}
