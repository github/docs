import cheerio from 'cheerio'
import { range } from 'lodash-es'

export default function getMiniTocItems(html, maxHeadingLevel = 2, headingScope = '') {
  const $ = cheerio.load(html, { xmlMode: true })

  // eg `h2, h3` or `h2, h3, h4` depending on maxHeadingLevel
  const selector = range(2, maxHeadingLevel + 1)
    .map((num) => `${headingScope} h${num}`)
    .join(', ')
  const headings = $(selector)

  // return an array of objects containing each heading's contents, level, and optional platform.
  // Article layout uses these as follows:
  //  - `title` and `link` to render the mini TOC headings
  //  - `headingLevel` the `2` in `h2`; used for determining required indentation
  //  - `platform` to show or hide platform-specific headings via client JS

  // H1 = highest importance, H6 = lowest importance
  let mostImportantHeadingLevel
  const flatToc = headings
    .get()
    .filter((item) => {
      if (!item.parent || !item.parent.attribs) return true
      // Hide any items that belong to a hidden div
      const { attribs } = item.parent
      return !('hidden' in attribs)
    })
    .map((item) => {
      // remove any <span> tags including their content
      $('span', item).remove()

      // Capture the anchor tag nested within the header, get its href and remove it
      const anchor = $('a.doctocat-link', item)
      const href = anchor.attr('href')
      anchor.remove()

      // remove any <strong> tags but leave content
      $('strong', item).map((i, el) => $(el).replaceWith($(el).contents()))

      const contents = { href, title: $(item).text().trim() }
      const headingLevel = parseInt($(item)[0].name.match(/\d+/)[0], 10) || 0 // the `2` from `h2`

      const platform = $(item).parent('.extended-markdown').attr('class') || ''

      // track the most important heading level while we're looping through the items
      if (headingLevel < mostImportantHeadingLevel || mostImportantHeadingLevel === undefined) {
        mostImportantHeadingLevel = headingLevel
      }

      return { contents, headingLevel, platform }
    })
    .map((item) => {
      // set the indentation level for each item based on the most important
      // heading level in the current article
      return {
        ...item,
        indentationLevel: item.headingLevel - mostImportantHeadingLevel,
      }
    })

  // convert the flatToc to a nested structure to simplify semantic rendering on the client
  const nestedToc = buildNestedToc(flatToc)

  return minimalMiniToc(nestedToc)
}

// Recursively build a tree from the list of allItems
function buildNestedToc(allItems, startIndex = 0) {
  const startItem = allItems[startIndex]
  if (!startItem) {
    return []
  }
  let curLevelIndentation = startItem.indentationLevel
  const currentLevel = []

  for (let cursor = startIndex; cursor < allItems.length; cursor++) {
    const cursorItem = allItems[cursor]
    const nextItem = allItems[cursor + 1]
    const nextItemIsNested = nextItem && nextItem.indentationLevel > cursorItem.indentationLevel

    // if it's the current indentation level, push it on and keep going
    if (curLevelIndentation === cursorItem.indentationLevel) {
      currentLevel.push({
        ...cursorItem,
        items: nextItemIsNested ? buildNestedToc(allItems, cursor + 1) : [],
      })
      continue
    }

    // these items were already handled via recursion
    if (curLevelIndentation < cursorItem.indentationLevel) {
      continue
    }

    // current root indentation is _greater_ than our current cursor item,
    if (curLevelIndentation > cursorItem.indentationLevel) {
      // special scenario where the initial list started with "less important" headers
      // so we need to reset our expectations of what level to judge the indentation on
      if (startIndex === 0) {
        curLevelIndentation = cursorItem.indentationLevel
        currentLevel.push({
          ...cursorItem,
          items: nextItemIsNested ? buildNestedToc(allItems, cursor + 1) : [],
        })
        continue
      }
      break
    }
  }

  return currentLevel
}

// Strip the bits and pieces from each object in the array that are
// not needed in the React component rendering.
function minimalMiniToc(toc) {
  return toc.map(({ platform, contents, items }) => {
    const minimal = { contents }
    const subItems = minimalMiniToc(items)
    if (subItems.length) minimal.items = subItems
    if (platform) minimal.platform = platform
    return minimal
  })
}
