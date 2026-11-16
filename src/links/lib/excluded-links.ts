// The external and internal link checkers read excluded-links.yml through this module.
// Patterns in that file can appear in content, but check-links-external.ts and
// check-links-internal.ts do not verify them.

import { load } from 'js-yaml'
import fs from 'fs'

type ExcludedLink = {
  startsWith: string | undefined
  is: string | undefined
}

const excludedLinks = load(
  fs.readFileSync('./src/links/lib/excluded-links.yml', 'utf8'),
) as ExcludedLink[]

if (excludedLinks.some(({ startsWith, is }) => startsWith && is)) {
  throw new Error(
    'Excluded links cannot have both <startsWith> and <is> keys. Please update excluded-links.yml to only have one of them for each entry.',
  )
}

export default excludedLinks
