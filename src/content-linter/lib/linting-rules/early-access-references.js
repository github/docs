import { addError } from 'markdownlint-rule-helpers'
import yaml from 'js-yaml'

import { getRange, getFrontmatter } from '../helpers/utils.js'

const ERROR_MESSAGE =
  'An early access reference appears to be used in a non-early access doc. Remove early access references or disable this rule.'

// Early access content is allowed to use early access references
// There are several existing allowed references to `early access`
// as a GitHub feature. This rule focuses on references to early
// access pages.
const isEarlyAccessFilepath = (filepath) => filepath.includes('early-access')

const EARLY_ACCESS_REGEX = /early-access/gi
// This is a pattern seen in link paths for articles about
// early access. This pattern is ok.
const EARLY_ACCESS_ARTICLE_REGEX = /-early-access-/

export const earlyAccessReferences = {
  names: ['GHD008', 'early-access-references'],
  description:
    'Files that are not early access should not reference early-access or early-access files',
  tags: ['feature', 'early-access'],
  severity: 'error',
  function: (params, onError) => {
    if (isEarlyAccessFilepath(params.name)) return

    // Find errors in content
    for (let i = 0; i < params.lines.length; i++) {
      const line = params.lines[i]
      const matches = line.match(EARLY_ACCESS_REGEX)
      if (matches && !EARLY_ACCESS_ARTICLE_REGEX.test(line)) {
        addError(
          onError,
          i + 1,
          ERROR_MESSAGE,
          line,
          getRange(line, matches[0]),
          null, // No fix possible
        )
      }
    }
  },
}

export const frontmatterEarlyAccessReferences = {
  names: ['GHD009', 'frontmatter-early-access-references'],
  description:
    'Files that are not early access should not have frontmatter that references early-access',
  tags: ['frontmatter', 'feature', 'early-access'],
  function: (params, onError) => {
    const filepath = params.name
    if (isEarlyAccessFilepath(filepath)) return

    // Find errors in frontmatter
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    // The redirect_from property is allowed to contain early-access paths
    delete fm.redirect_from

    // The landing page must link to early-access content so the
    // children property doesn't need to be checked in that case.
    if (filepath === 'content/index.md') delete fm.children

    // Convert updated frontmatter back to a string
    // to search for 'early-access'.'
    const fmStrings = yaml.dump(fm).split('\n')

    for (const line of fmStrings) {
      const matches = line.match(EARLY_ACCESS_REGEX)
      if (matches && !EARLY_ACCESS_ARTICLE_REGEX.test(line)) {
        for (const match of matches) {
          const lineNumber = params.lines.indexOf(line) + 1
          const range = getRange(line, match)
          addError(
            onError,
            lineNumber,
            ERROR_MESSAGE,
            line,
            range,
            null, // No fix possible
          )
        }
      }
    }
  },
}
