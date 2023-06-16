import { addError, filterTokens } from 'markdownlint-rule-helpers'

export const internalLinksSlash = {
  names: ['MD113', 'internal-links-slash'],
  description: 'Internal links must start with a /',
  severity: 'error',
  tags: ['links', 'url'],
  function: function MD113(params, onError) {
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
            addError(
              onError,
              child.lineNumber,
              `This relative link: ${linkHref} on line ${child.lineNumber} must start with a /`,
              undefined,
              undefined,
              {
                lineNumber: child.lineNumber,
                editColumn: token.line.indexOf('(') + 2,
                deleteCount: 0,
                insertText: '/',
              }
            )
            internalLinkHasSlash = true
          }
        }
      }
    })
  },
}
