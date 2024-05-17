import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail, getRange } from '../helpers/utils.js'

export const internalLinksSlash = {
  names: ['GHD003', 'internal-links-slash'],
  description: 'Internal links must start with a /',
  tags: ['links', 'url'],
  function: (params, onError) => {
    filterTokens(params, 'inline', (token) => {
      for (const child of token.children) {
        if (child.type !== 'link_open') continue

        // Example child.attrs:
        // [
        //  ['href', '/get-started'], ['target', '_blank'],
        //  ['rel', 'canonical'],
        // ]
        const hrefsMissingSlashes = child.attrs
          // The attribute could also be `target` or `rel`
          .filter((attr) => attr[0] === 'href')
          // Filter out prefixes we don't want to check
          .filter(
            (attr) =>
              !['http', 'mailto', '#', '/'].some((ignorePrefix) =>
                attr[1].startsWith(ignorePrefix),
              ),
          )
          // Get the link path from the attribute
          .map((attr) => attr[1])

        // Create errors for each link path that doesn't start with a /
        for (const linkPath of hrefsMissingSlashes) {
          const range = getRange(child.line, linkPath)
          addFixErrorDetail(onError, child.lineNumber, `/${linkPath}`, linkPath, range, {
            lineNumber: child.lineNumber,
            editColumn: child.line.indexOf(linkPath) + 1,
            deleteCount: 0,
            insertText: '/',
          })
        }
      }
    })
  },
}
