const GithubSlugger = require('github-slugger')
const slugger = new GithubSlugger()
const Entities = require('html-entities').XmlEntities
const entities = new Entities()

// replace translated IDs and links in headings with English
module.exports = function useEnglishHeadings ($, englishHeadings) {
  $('h2, h3, h4').each((i, el) => {
    slugger.reset()

    // find English heading in the collection
    const englishHeading = englishHeadings[entities.encode($(el).text())]

    // get English slug
    const englishSlug = slugger.slug(englishHeading)

    // use English slug for heading ID and link
    $(el).attr('id', englishSlug)
    $(el).children('a').attr('href', `#${englishSlug}`)
  })

  return $
}
