import { loadPages, loadPageMap } from '../../../lib/page-data.js'
import loadRedirects from '#src/redirects/lib/precompile.js'
import { getDeepDataByLanguage } from '../../../lib/get-data.js'
import { checkURL } from '../../../tests/helpers/check-url.js'

const pageList = await loadPages(undefined, ['en'])
const pages = await loadPageMap(pageList)
const redirects = await loadRedirects(pageList)

describe('learning tracks', () => {
  const allLearningTracks = getDeepDataByLanguage('learning-tracks', 'en')
  const topLevels = Object.keys(allLearningTracks)

  test.each(topLevels)('learning-track in data/learning-tracks/%s.yml', (topLevel) => {
    const learningTracks = allLearningTracks[topLevel]
    const redirectsContext = { redirects, pages }
    const troubles = Object.entries(learningTracks)
      .map(([learningTrackKey, learningTrack]) => {
        return [
          learningTrackKey,
          learningTrack.guides
            .map((guide, i) => checkURL(guide, i, redirectsContext))
            .filter(Boolean),
        ]
      })
      .filter(([, trouble]) => trouble.length > 0)

    let errorMessage = `In data/learning-tracks/${topLevel}.yml there are ${troubles.length} guides that are not correct.\n`
    let fixables = 0
    for (const [key, guides] of troubles) {
      errorMessage += `Under "${key}"...\n`
      for (const { uri, index, redirects } of guides) {
        if (redirects) {
          fixables += 1
          errorMessage += `  guide: #${index + 1} ${uri} redirects to ${redirects}\n`
        } else {
          errorMessage += `  guide: #${index + 1} ${uri} is broken.\n`
        }
      }
    }
    if (fixables) {
      errorMessage += `\nNOTE! To automatically fix the redirects run this command:\n`
      errorMessage += `\n\t./src/links/scripts/update-internal-links.js data/learning-tracks/${topLevel}.yml\n`
    }
    expect(troubles.length, errorMessage).toEqual(0)
  })
})
