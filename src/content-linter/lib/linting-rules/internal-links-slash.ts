import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail, getRange } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule, MarkdownToken } from '../../types'

export const internalLinksSlash: Rule = {
  names: ['GHD003', 'internal-links-slash'],
  description: 'Internal links must start with a /',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'inline', (token: MarkdownToken) => {
      if (!token.children) return
      for (const child of token.children) {
        if (child.type !== 'link_open') continue

        if (!child.attrs) continue
        const hrefsMissingSlashes = child.attrs
          // markdown-it attrs also include target and rel, so filter for href.
          .filter((attr: [string, string]) => attr[0] === 'href')
          .filter(
            (attr: [string, string]) =>
              !['http', 'mailto', '#', '/'].some((ignorePrefix) =>
                attr[1].startsWith(ignorePrefix),
              ),
          )
          // MD042 from markdownlint catches empty links.
          .filter((attr: [string, string]) => attr[1] !== '')
          .map((attr: [string, string]) => attr[1])

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
