import { addError } from 'markdownlint-rule-helpers'
import { TokenKind } from 'liquidjs'

import { getFrontmatter } from '../helpers/utils.js'
import { getLiquidTokens, getPositionData } from '../helpers/liquid-utils.js'

export const raiReusableUsage = {
  names: ['GHD035', 'rai-reusable-usage'],
  description:
    'RAI articles and reusables can only reference reusable content in the data/reusables/rai directory',
  tags: ['feature', 'rai'],
  function: (params, onError) => {
    // ROOT is set in the test environment to src/fixtures/fixtures otherwise
    const ROOT = process.env.ROOT
    const RAI_DATA_PATH = ROOT ? `${ROOT}/data/reusables/rai` : 'data/reusables/rai'
    const isRaiDataFile = params.name && params.name.startsWith(RAI_DATA_PATH)
    const fm = getFrontmatter(params.frontMatterLines) || {}
    const isRaiContentFile = fm.type === 'rai'

    if (!isRaiDataFile && !isRaiContentFile) return

    const content = params.lines.join('\n')
    const tokens = getLiquidTokens(content)
      .filter((token) => token.kind === TokenKind.Tag)
      .filter((token) => token.name === 'data' || token.name === 'indented_data_reference')

    for (const token of tokens) {
      // When the liquid tag is indented_data_reference, there are
      // two arguments: the path in the data directory and the number
      // of spaces to indent. We only want the first argument to
      // validate if the data reference is defined.
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
