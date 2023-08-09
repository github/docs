import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail } from '../helpers/utils.js'

export const internalLinksSlash = {
  names: ['GHD006', 'internal-links-slash'],
  description: 'Internal links must start with a /',
  severity: 'error',
  tags: ['links', 'url'],
  information: new URL('https://github.com/github/docs/blob/main/src/content-linter/README.md'),
  function: function GHD007(params, onError) {
    filterTokens(params, 'inline', (token) => {
      let linkHref = ''
      let internalLinkHasSlash = true
      for (const child of token.children) {
        if (child.type === 'link_open') {
          linkHref = ''
          for (const attr of child.attrs) {
            if (
              attr[0] === 'href' &&
              !attr[1].startsWith('http') &&
              !attr[1].startsWith('mailto') &&
              !attr[1].startsWith('#') &&
              !attr[1].startsWith('/')
            ) {
              internalLinkHasSlash = false
              linkHref = attr[1]
            }
          }
        } else if (child.type === 'link_close') {
          if (!internalLinkHasSlash) {
            addFixErrorDetail(onError, child.lineNumber, `/${linkHref}`, linkHref, undefined, {
              lineNumber: child.lineNumber,
              editColumn: token.line.indexOf('(') + 2,
              deleteCount: 0,
              insertText: '/',
            })
            internalLinkHasSlash = true
          }
        }
      }
    })
  },
}
