// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { addError } from 'markdownlint-rule-helpers'
import { TokenKind } from 'liquidjs'
import path from 'path'

import { getFrontmatter } from '../helpers/utils'
import { getLiquidTokens, getPositionData } from '../helpers/liquid-utils'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

interface Frontmatter {
  type?: string
  // Allow any additional frontmatter properties since we only care about 'type'
  [key: string]: any
}

interface LiquidToken {
  kind: number
  name?: string
  args: string
  content: string
  begin: number
  end: number
}

export const raiReusableUsage: Rule = {
  names: ['GHD035', 'rai-reusable-usage'],
  description:
    'RAI articles and reusables can only reference reusable content in the data/reusables/rai directory',
  tags: ['feature', 'rai'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    if (!isFileRai(params)) return

    const content = params.lines.join('\n')
    const tokens = (getLiquidTokens(content) as LiquidToken[])
      .filter((token: LiquidToken) => token.kind === TokenKind.Tag)
      .filter(
        (token: LiquidToken) => token.name === 'data' || token.name === 'indented_data_reference',
      )
      // It's ok to reference variables from rai content
      .filter((token: LiquidToken) => !token.args.startsWith('variables'))

    for (const token of tokens) {
      // if token is 'data  foo.bar` or `indented_data_reference foo.bar  depth=3`
      // we only want the `foo.bar` part.
      const dataDirectoryReference = token.args.split(/\s+/)[0]
      if (dataDirectoryReference.startsWith('reusables.rai')) continue

      const lines = params.lines
      const { lineNumber, column, length } = getPositionData(token, lines)
      addError(
        onError,
        lineNumber,
        `RAI reusables and content articles can only reference reusables in the data/reusables/rai directory to ensure that changes to RAI content are reviewed by the legal-product team. The Liquid data reference {% ${token.content} %} needs to be moved to the data/reusables/rai directory.`,
        token.content,
        [column, length],
        null, // No fix available
      )
    }
  },
}

// Rai file content can be in either the data/reusables/rai directory
// or anywhere in the content directory
function isFileRai(params: RuleParams): boolean {
  // ROOT is set in the test environment to src/fixtures/fixtures otherwise
  // it is set to the root of the project.
  const ROOT = process.env.ROOT || '.'
  const dataPath = path.join(ROOT, 'data/reusables')
  const dataRai = path.join(dataPath, 'rai')

  if (params.name.startsWith(dataPath)) {
    return params.name.startsWith(dataRai)
  }

  const fm: Frontmatter = (getFrontmatter(params.frontMatterLines) as Frontmatter) || {}
  return fm.type === 'rai'
}
