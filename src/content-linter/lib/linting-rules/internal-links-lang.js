import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail } from '../helpers/utils.js'
import { languageKeys } from '../../../../lib/languages.js'

export const internalLinksLang = {
  names: ['GHD005', 'internal-links-lang'],
  description: 'Internal links must not have a hardcoded language code',
  severity: 'error',
  tags: ['links', 'url'],
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GHD006(params, onError) {
    filterTokens(params, 'inline', (token) => {
      let linkHref = ''
      let internalLinkHasLang = false
      for (const child of token.children) {
        if (child.type === 'link_open') {
          linkHref = ''
          for (const attr of child.attrs) {
            if (
              languageKeys.some(
                (lang) => attr[1].startsWith(`/${lang}/`) || attr[1].startsWith(lang),
              )
            ) {
              internalLinkHasLang = true
              linkHref = attr[1]
            }
          }
        } else if (child.type === 'link_close') {
          if (internalLinkHasLang) {
            addFixErrorDetail(
              onError,
              child.lineNumber,
              linkHref.replace(/(\/)?[a-z]{2}/, ''),
              linkHref,
              undefined, // Todo add range
              {
                lineNumber: child.lineNumber,
                editColumn: token.line.indexOf('(') + 2,
                deleteCount: 3,
              },
            )
            internalLinkHasLang = false
          }
        }
      }
    })
  },
}
