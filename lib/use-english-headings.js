import GithubSlugger from 'github-slugger'
import xHtmlEntities from 'html-entities'
const slugger = new GithubSlugger()
const Entities = xHtmlEntities.XmlEntities
const entities = new Entities()

// replace translated IDs and links in headings with English
export default function useEnglishHeadings($, englishHeadings) {
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
