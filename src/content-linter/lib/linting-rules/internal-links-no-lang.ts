import { filterTokens } from 'markdownlint-rule-helpers'

import { addFixErrorDetail, getRange } from '../helpers/utils'
import { languageKeys } from '@/languages/lib/languages'
import type { RuleParams, RuleErrorCallback, Rule, MarkdownToken } from '../../types'

export const internalLinksNoLang: Rule = {
  names: ['GHD002', 'internal-links-no-lang'],
  description: 'Internal links must not have a hardcoded language code',
  tags: ['links', 'url'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'inline', (token: MarkdownToken) => {
      for (const child of token.children!) {
        if (child.type !== 'link_open') continue

        // Example child.attrs:
        // [
        //  ['href', 'get-started'], ['target', '_blank'],
        //  ['rel', 'canonical'],
        // ]
        const hrefsWithLanguageCode = child
          // The attribute could also be `target` or `rel`.
          .attrs!.filter((attr: [string, string]) => attr[0] === 'href')
          .filter((attr: [string, string]) => attr[1].startsWith('/') || !attr[1].startsWith('//'))
          .filter((attr: [string, string]) =>
            languageKeys.some((lang) => attr[1].split('/')[1] === lang),
          )
          .map((attr: [string, string]) => attr[1])
        for (const linkPath of hrefsWithLanguageCode) {
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
