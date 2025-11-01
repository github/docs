import { TokenKind } from 'liquidjs'
import { getLiquidTokens, getPositionData } from '../helpers/liquid-utils'
import { addFixErrorDetail } from '../helpers/utils'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'
/*
Octicons should always have an aria-label attribute even if aria hidden. For example:

  DO use aria-label
  {% octicon "alert" aria-label="alert" %}
  {% octicon "alert" aria-label="alert" aria-hidden="true" %}
  {% octicon "alert" aria-label="alert" aria-hidden="true" class="foo" %}

  This is necessary for copilot to be able to recognize the svgs correctly when using our API.

*/

export const octiconAriaLabels: Rule = {
  names: ['GHD044', 'octicon-aria-labels'],
  description: 'Octicons should always have an aria-label attribute even if aria-hidden.',
  tags: ['accessibility', 'octicons'],
  parser: 'markdownit',
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const content = params.lines.join('\n')
    // Using 'any' type for tokens as getLiquidTokens returns tokens from liquid-utils.ts which lacks type definitions
    const tokens = getLiquidTokens(content)
      .filter((token: any) => token.kind === TokenKind.Tag)
      .filter((token: any) => token.name === 'octicon')

    for (const token of tokens) {
      const { lineNumber, column, length } = getPositionData(token, params.lines)

      const hasAriaLabel = token.args.includes('aria-label=')

      if (!hasAriaLabel) {
        const range = [column, length]

        const octiconNameMatch = token.args.match(/["']([^"']+)["']/)
        const octiconName = octiconNameMatch ? octiconNameMatch[1] : 'icon'
        const originalContent = token.content
        const fixedContent = `${originalContent} aria-label="${octiconName}"`

        addFixErrorDetail(
          onError,
          lineNumber,
          `octicon should have an aria-label even if aria hidden. Try using 'aria-label=${octiconName}'`,
          token.content,
          range,
          {
            lineNumber,
            editColumn: column,
            deleteCount: length,
            insertText: `{% ${fixedContent} %}`,
          },
        )
      }
    }
  },
}
