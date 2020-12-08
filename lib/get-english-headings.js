// capture h2, h3, and h4 headings
const headingRegex = /^###?#? (.*?)$/gm

// for any translated page, first get corresponding English markdown
// then get the headings on both the translated and English pageMap
// finally, create a map of translation:English for all headings on the page
module.exports = function getEnglishHeadings (page, pageMap) {
  const translatedHeadings = page.markdown.match(headingRegex)
  if (!translatedHeadings) return

  const englishPage = pageMap[`/en/${page.relativePath.replace(/.md$/, '')}`]
  if (!englishPage) return

  // FIX  there may be bugs if English headings are updated before Crowdin syncs up :/
  const englishHeadings = englishPage.markdown.match(headingRegex)
  if (!englishHeadings) return

  // select heading text only
  const cleanTranslatedHeadings = translatedHeadings.map(h => h.replace(headingRegex, '$1'))
  const cleanEnglishHeadings = englishHeadings.map(h => h.replace(headingRegex, '$1'))

  // return a map from translation:English
  return Object.assign(...cleanTranslatedHeadings.map((k, i) => ({
    [k]: cleanEnglishHeadings[i]
  })))
}
