// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail, getRange } from '../helpers/utils'
import { languageKeys } from '@/languages/lib/languages'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

export const internalLinksNoLang: Rule = {
  names: ['GHD002', 'internal-links-no-lang'],
  description: 'Internal links must not have a hardcoded language code',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Using 'any' type for token as markdownlint-rule-helpers doesn't provide TypeScript types
    filterTokens(params, 'inline', (token: any) => {
      for (const child of token.children) {
        if (child.type !== 'link_open') continue

        // Example child.attrs:
        // [
        //  ['href', 'get-started'], ['target', '_blank'],
        //  ['rel', 'canonical'],
        // ]
        // Attribute arrays are tuples of [attributeName, attributeValue] from markdownit parser
        const hrefsMissingSlashes = child.attrs
          // The attribute could also be `target` or `rel`
          .filter((attr: [string, string]) => attr[0] === 'href')
          .filter((attr: [string, string]) => attr[1].startsWith('/') || !attr[1].startsWith('//'))
          // Filter out link paths that start with language code
          .filter((attr: [string, string]) =>
            languageKeys.some((lang) => attr[1].split('/')[1] === lang),
          )
          // Get the link path from the attribute
          .map((attr: [string, string]) => attr[1])
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
