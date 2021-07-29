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
  //  - `contents` to render the mini TOC headings
  //  - `headingLevel` the `2` in `h2`; used for determining required indentation
  //  - `platform` to show or hide platform-specific headings via client JS
  const items = headings
    .get()
    .filter((item) => {
      if (!item.parent || !item.parent.attribs) return true
      // Hide any items that belong to a hidden div
      const { attribs } = item.parent
      return !('hidden' in attribs)
    })
    .map((item) => {
      // remove any <span> tags including their content
      $('span').remove()

      // remove any <strong> tags but leave content
      $('strong').map((i, el) => $(el).replaceWith($(el).contents()))

      const contents = $(item).html()
      const headingLevel = Number($(item)[0].name.replace(/^h/, '')) // the `2` from `h2`
      const platform = $(item).parent('.extended-markdown').attr('class')
      return { contents, headingLevel, platform }
    })

  // determine indentation level for each item based on the largest
  // heading level in the current article
  const largestHeadingLevel = items.map((item) => item.headingLevel).sort()[0]
  items.forEach((item) => {
    item.indentationLevel = item.headingLevel - largestHeadingLevel
  })

  return items
}
