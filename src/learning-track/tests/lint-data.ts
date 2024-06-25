import { describe, expect, test } from 'vitest'

import type { LearningTracks } from '@/types'
import { loadPages, loadPageMap } from '@/frame/lib/page-data.js'
import loadRedirects from '@/redirects/lib/precompile.js'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data.js'
import { checkURL } from '@/tests/helpers/check-url.js'

const pageList = await loadPages(undefined, ['en'])
const pages = await loadPageMap(pageList)
const redirects = await loadRedirects(pageList)

describe('learning tracks', () => {
  // TODO: Once getDeepDataByLanguage is ported to TS
  // a more appropriate API would be to use `getDeepDataByLanguage<LearningTracks)(...)`
  const allLearningTracks = getDeepDataByLanguage('learning-tracks', 'en') as LearningTracks
  const topLevels = Object.keys(allLearningTracks)

  test.each(topLevels)('learning-track in data/learning-tracks/%s.yml', (topLevel) => {
    const learningTracks = allLearningTracks[topLevel]
    const redirectsContext = { redirects, pages }

    for (const learningTrack of Object.values(learningTracks)) {
      const length = learningTrack.guides.length
      const size = new Set(learningTrack.guides).size
      let errorMessage = ''
      if (length !== size) {
        errorMessage = `In data/learning-tracks/${topLevel}.yml there are duplicate guides.`
        const counts = new Map()
        for (const guide of learningTrack.guides) {
          counts.set(guide, (counts.get(guide) || 0) + 1)
        }
        const dupes = [...counts.entries()].filter(([, count]) => count > 1).map(([entry]) => entry)
        errorMessage += `\nTo fix this, remove: ${dupes.join(' and ')}`
      }
      expect(length, errorMessage).toEqual(size)
    }

    type Trouble = {
      uri: string
      index: number
      redirects: string | undefined
    }
    type TroubleTuple = [string, Trouble[]]
    const troubles = Object.entries(learningTracks)
      .map(([learningTrackKey, learningTrack]) => {
        return [
          learningTrackKey,
          learningTrack.guides
            .map((guide, i) => checkURL(guide, i, redirectsContext))
            .filter(Boolean),
        ]
      })
      .filter(([, trouble]) => trouble.length > 0) as TroubleTuple[]

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
