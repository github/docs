import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule, MarkdownToken } from '../../types'

// Matches a URI scheme like http:, mailto:, or vscode:, which marks a link as external.
const uriSchemeRegex = /^[a-z][a-z0-9+.-]*:/i

// Anchor on "](" so text earlier on the line, like link text or another link, is not matched.
// Scan openers in source order so bare and angle-wrapped destinations match the right link.
function findHrefIndex(line: string, href: string, fromIndex: number): number {
  for (let i = line.indexOf('](', fromIndex); i !== -1; i = line.indexOf('](', i + 2)) {
    let start = i + 2
    while (line[start] === ' ' || line[start] === '\t') start++
    const angled = line[start] === '<'
    if (angled) start++
    if (!line.startsWith(href, start)) continue
    const next = line.charAt(start + href.length)
    if (angled ? next === '>' : next === '' || ' \t)'.includes(next)) return start
  }
  return -1
}

export const internalLinksSlash: Rule = {
  names: ['GHD003', 'internal-links-slash'],
  description: 'Internal links must start with a /',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const searchFromByLine = new Map<number, number>()
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
              !['#', '/'].some((ignorePrefix) => attr[1].startsWith(ignorePrefix)) &&
              !uriSchemeRegex.test(attr[1]),
          )
          // MD042 from markdownlint catches empty links.
          .filter((attr: [string, string]) => attr[1] !== '')
          .map((attr: [string, string]) => attr[1])

        for (const linkPath of hrefsMissingSlashes) {
          const searchFrom = searchFromByLine.get(child.lineNumber) || 0
          const hrefIndex = findHrefIndex(child.line, linkPath, searchFrom)
          // Wrapped link text or escapes markdown-it decoded leave no exact href to fix on this line.
          if (hrefIndex === -1) {
            addFixErrorDetail(onError, child.lineNumber, `/${linkPath}`, linkPath, null, undefined)
            continue
          }
          searchFromByLine.set(child.lineNumber, hrefIndex + linkPath.length)
          const column = hrefIndex + 1
          addFixErrorDetail(
            onError,
            child.lineNumber,
            `/${linkPath}`,
            linkPath,
            [column, linkPath.length],
            {
              lineNumber: child.lineNumber,
              editColumn: column,
              deleteCount: 0,
              insertText: '/',
            },
          )
        }
      }
    })
  },
}
