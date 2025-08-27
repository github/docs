/**
 * Linkinator relies
 * on this in `src/links/scripts/rendered-content-link-checker-cli.js` when we encounter external
 * links that we *specifically ignore*. That means, that URLs or patterns
 * mentioned in the corresponding YAML file might appear within our content but we don't
 * bother checking that they actually work.
 */

import yaml from 'js-yaml'
import fs from 'fs'

type ExcludedLink = {
  startsWith: string | undefined
  is: string | undefined
}

const excludedLinks = yaml.load(
  fs.readFileSync('./src/links/lib/excluded-links.yml', 'utf8'),
) as ExcludedLink[]

if (excludedLinks.some(({ startsWith, is }) => startsWith && is)) {
  throw new Error(
    'Excluded links cannot have both <startsWith> and <is> keys. Please update excluded-links.yml to only have one of them for each entry.',
  )
}

export default excludedLinks
