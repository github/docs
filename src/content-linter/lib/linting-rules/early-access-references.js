import { addError } from 'markdownlint-rule-helpers'
import yaml from 'js-yaml'

import frontmatter from '../../../../lib/read-frontmatter.js'
import { getRange } from '../helpers/utils.js'

export const earlyAccessReferences = {
  names: ['GH035', 'early-access-references'],
  description:
    'Files that are not early access should not reference early-access or early-access files.',
  tags: ['early-access'],
  severity: 'error',
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GH035(params, onError) {
    const filepath = params.name
    // Early access content is allowed to use early access references
    // There are several existing allowed references to `early access`
    // as a GitHub feature. This rule focuses on references to early
    // access pages.
    const isEarlyAccess = filepath.includes('early-access')
    if (isEarlyAccess) return

    const earlyAccessRegex = /early-access/i
    const earlyAccessArticlesRegex = /-early-access-/

    for (let i = 0; i < params.lines.length; i++) {
      const line = params.lines[i]
      const matches = line.match(earlyAccessRegex)
      if (matches && !earlyAccessArticlesRegex.test(line)) {
        addError(
          onError,
          i + 1,
          'An early access reference appears to be used in a non-early access doc. Remove early access references or disable this rule.',
          line,
          getRange(line, matches[0]),
          null, // No fix possible
        )
      }
    }

    // The only Frontmatter property that is allowed to contain
    // early-access is the redirect_from property.
    // To get the list of frontmatter lines that are applicable
    // we can convert the frontmatter lines array to an object
    // remove the property then convert it back to strings.
    const frontmatterString = params.frontMatterLines.join('\n')
    const fm = frontmatter(frontmatterString).data
    delete fm.redirect_from
    // The landing page must link to early-access content so this
    // case is allowed.
    const isLandingPage = filepath === 'content/index.md'
    if (isLandingPage) delete fm.children
    const fmStrings = yaml.dump(fm).split('\n')

    for (let i = 0; i < fmStrings.length; i++) {
      const fmLine = fmStrings[i]
      if (earlyAccessRegex.test(fmLine) && !earlyAccessArticlesRegex.test(fmLine)) {
        addError(
          onError,
          1,
          'Frontmatter: An early access reference appears to be used in a non-early access doc. Remove early access references or disable this rule.',
          fmLine,
          null,
          null, // No fix possible
        )
      }
    }
  },
}
