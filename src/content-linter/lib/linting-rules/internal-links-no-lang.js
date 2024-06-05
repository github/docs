import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail, getRange } from '../helpers/utils.js'
import { allLanguageKeys } from '#src/languages/lib/languages.js'

export const internalLinksNoLang = {
  names: ['GHD002', 'internal-links-no-lang'],
  description: 'Internal links must not have a hardcoded language code',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params, onError) => {
    filterTokens(params, 'inline', (token) => {
      for (const child of token.children) {
        if (child.type !== 'link_open') continue

        // Example child.attrs:
        // [
        //  ['href', 'get-started'], ['target', '_blank'],
        //  ['rel', 'canonical'],
        // ]
        const hrefsMissingSlashes = child.attrs
          // The attribute could also be `target` or `rel`
          .filter((attr) => attr[0] === 'href')
          .filter((attr) => attr[1].startsWith('/') || !attr[1].startsWith('//'))
          // Filter out link paths that start with language code
          .filter((attr) => allLanguageKeys.some((lang) => attr[1].split('/')[1] === lang))
          // Get the link path from the attribute
          .map((attr) => attr[1])
        // Create errors for each link path that includes a language code
        for (const linkPath of hrefsMissingSlashes) {
          const range = getRange(child.line, linkPath)
          const languageCode = linkPath.split('/')[1]
          const replaceChar = linkPath === `/${languageCode}` ? '/' : ''
          addFixErrorDetail(
            onError,
            child.lineNumber,
            linkPath.replace(`/${languageCode}`, replaceChar),
            linkPath,
            range,
            {
              lineNumber: child.lineNumber,
              editColumn: child.line.indexOf(linkPath) + 1,
              deleteCount: 3,
            },
          )
        }
      }
    })
  },
}
