import cheerio from 'cheerio'
import { range } from 'lodash-es'

import { renderContent } from '@/content-render/index'
import type { Context } from '@/types'

interface MiniTocContents {
  href: string
  title: string
}

export interface MiniTocItem {
  contents: MiniTocContents
  items?: MiniTocItem[]
  platform?: string
}

interface FlatTocItem {
  contents: MiniTocContents
  headingLevel: number
  platform: string
  indentationLevel: number
  items?: FlatTocItem[]
}

// Keep maxHeadingLevel=2 for accessibility reasons, see docs-engineering#2701 for more info
export default function getMiniTocItems(
  html: string,
  maxHeadingLevel = 2,
  headingScope = '',
): MiniTocItem[] {
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
  let mostImportantHeadingLevel: number | undefined
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
      const anchor = $('a.heading-link', item)
      const href = anchor.attr('href')
      if (!href) {
        // Can happen if the, for example, `<h2>` tag was put there
        // manually with HTML into the Markdown content. Then it wouldn't
        // be rendered with an expected `<a class="heading-link" href="#..."`
        // link in front of it.
        // The `return null` will be filtered after the `.map()`
        return null
      }

      // remove any <strong> tags but leave content
      $('strong', item).map((i, el) => $(el).replaceWith($(el).contents()))

      const contents: MiniTocContents = { href, title: $(item).text().trim() }
      const element = $(item)[0] as cheerio.TagElement
      const headingLevel = parseInt(element.name.match(/\d+/)![0], 10) || 0 // the `2` from `h2`

      const platform = $(item).parent('.ghd-tool').attr('class') || ''

      // track the most important heading level while we're looping through the items
      if (headingLevel < mostImportantHeadingLevel! || mostImportantHeadingLevel === undefined) {
        mostImportantHeadingLevel = headingLevel
      }

      return { contents, headingLevel, platform }
    })
    .filter(Boolean)
    .map((item) => {
      // set the indentation level for each item based on the most important
      // heading level in the current article
      return {
        ...item!,
        indentationLevel: item!.headingLevel - mostImportantHeadingLevel!,
      }
    })

  // convert the flatToc to a nested structure to simplify semantic rendering on the client
  const nestedToc = buildNestedToc(flatToc)

  return minimalMiniToc(nestedToc)
}

// Recursively build a tree from the list of allItems
function buildNestedToc(allItems: FlatTocItem[], startIndex = 0): FlatTocItem[] {
  const startItem = allItems[startIndex]
  if (!startItem) {
    return []
  }
  let curLevelIndentation = startItem.indentationLevel
  const currentLevel: FlatTocItem[] = []

  for (let cursor = startIndex; cursor < allItems.length; cursor++) {
    const cursorItem = allItems[cursor]
    const nextItem = allItems[cursor + 1]
    const nextItemIsNested = nextItem && nextItem.indentationLevel! > cursorItem.indentationLevel!

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
function minimalMiniToc(toc: FlatTocItem[]): MiniTocItem[] {
  return toc.map(({ platform, contents, items }) => {
    const minimal: MiniTocItem = { contents }
    const subItems = minimalMiniToc(items || [])
    if (subItems.length) minimal.items = subItems
    if (platform) minimal.platform = platform
    return minimal
  })
}

export async function getAutomatedPageMiniTocItems(
  items: string[],
  context: Context,
  depth = 2,
  markdownHeading = '',
): Promise<MiniTocItem[]> {
  const titles =
    markdownHeading +
    items
      .map((item) => {
        let title = ''
        for (let i = 0; i < depth; i++) {
          title += '#'
        }
        return title + ` ${item}\n`
      })
      .join('')

  const toc = await renderContent(titles, context)
  return getMiniTocItems(toc, depth, '')
}
