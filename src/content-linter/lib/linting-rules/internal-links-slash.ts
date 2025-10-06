// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail, getRange } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

export const internalLinksSlash: Rule = {
  names: ['GHD003', 'internal-links-slash'],
  description: 'Internal links must start with a /',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Using 'any' type for token as markdownlint-rule-helpers doesn't provide TypeScript types
    filterTokens(params, 'inline', (token: any) => {
      for (const child of token.children) {
        if (child.type !== 'link_open') continue

        // Example child.attrs:
        // [
        //  ['href', '/get-started'], ['target', '_blank'],
        //  ['rel', 'canonical'],
        // ]
        // Attribute arrays are tuples of [attributeName, attributeValue] from markdownit parser
        const hrefsMissingSlashes = child.attrs
          // The attribute could also be `target` or `rel`
          .filter((attr: [string, string]) => attr[0] === 'href')
          // Filter out prefixes we don't want to check
          .filter(
            (attr: [string, string]) =>
              !['http', 'mailto', '#', '/'].some((ignorePrefix) =>
                attr[1].startsWith(ignorePrefix),
              ),
          )
          // We can ignore empty links because MD042 from markdownlint catches empty links
          .filter((attr: [string, string]) => attr[1] !== '')
          // Get the link path from the attribute
          .map((attr: [string, string]) => attr[1])

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
