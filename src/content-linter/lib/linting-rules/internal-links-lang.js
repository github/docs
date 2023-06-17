import { addError, filterTokens } from 'markdownlint-rule-helpers'

import { languageKeys } from '../../../../lib/languages.js'

export const internalLinksLang = {
  names: ['MD114', 'internal-links-lang'],
  description: 'Internal links must not have a hardcoded language code',
  severity: 'error',
  tags: ['links', 'url'],
  function: function MD114(params, onError) {
    filterTokens(params, 'inline', (token) => {
      let linkHref = ''
      let internalLinkHasLang = false
      for (const child of token.children) {
        if (child.type === 'link_open') {
          linkHref = ''
          for (const attr of child.attrs) {
            if (
              languageKeys.includes(attr[1].split('/')[1]) ||
              languageKeys.includes(attr[1].split('/')[0])
            ) {
              internalLinkHasLang = true
              linkHref = attr[1]
            }
          }
        } else if (child.type === 'link_close') {
          if (internalLinkHasLang) {
            addError(
              onError,
              child.lineNumber,
              `This internal link: ${linkHref} must not start with a hardcoded language code.`,
              undefined,
              undefined,
              {
                lineNumber: child.lineNumber,
                editColumn: token.line.indexOf('(') + 2,
                deleteCount: 3,
              }
            )
            internalLinkHasLang = false
          }
        }
      }
    })
  },
}
