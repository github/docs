import { addError } from 'markdownlint-rule-helpers'
import { intersection } from 'lodash-es'
import matter from '@gr2m/gray-matter'

import { frontmatter, deprecatedProperties } from '@/frame/lib/frontmatter'
import readFrontmatter from '@/frame/lib/read-frontmatter'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

export const frontmatterSchema: Rule = {
  names: ['GHD012', 'frontmatter-schema'],
  description: 'Frontmatter must conform to the schema',
  tags: ['frontmatter', 'schema'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    let fm: Record<string, unknown>
    try {
      // Passing options skips the gray-matter cache, which returns empty data after a failed parse.
      fm = matter(params.lines.join('\n'), {}).data
    } catch (error) {
      const { mark, reason, message } = error as {
        mark?: { line: number }
        reason?: string
        message: string
      }
      // The parsed YAML block starts on the opening delimiter line, so its line index plus 1 is the file line.
      const lineNumber = Math.min((mark?.line ?? 0) + 1, params.lines.length)
      addError(
        onError,
        lineNumber,
        `Frontmatter YML parsing error: ${reason || message}`,
        params.lines[lineNumber - 1],
        null,
        null, // No fix possible
      )
      return
    }
    if (Object.keys(fm).length === 0) return

    // Deprecated checks cover only top-level frontmatter properties.
    const deprecatedKeys = intersection(Object.keys(fm), deprecatedProperties)
    for (const key of deprecatedKeys) {
      // Allow deprecated properties in early access articles.
      if (params.name.includes('early-access')) continue
      const line = params.lines.find((ln: string) => ln.trim().startsWith(key))
      const lineNumber = params.lines.indexOf(line!) + 1
      addError(
        onError,
        lineNumber,
        `The frontmatter property '${key}' is deprecated. Please remove the property from your article's frontmatter.`,
        line!,
        [1, line!.length],
        null, // No fix possible
      )
    }

    // readFrontmatter returns property, message, and reason for each schema error.
    const { errors } = readFrontmatter(params.lines.join('\n'), { schema: frontmatter.schema })
    for (const error of errors) {
      const property = error.property || ''
      const message = error.message || ''
      const reason = error.reason || ''
      const parts = property.split('.')

      let detail: string
      let context: string
      let searchProperty: string

      if (reason === 'additionalProperties') {
        detail = 'The frontmatter includes an unsupported property.'
        context = `Remove the property \`${property}\`.`
        searchProperty = parts[parts.length - 1] || ''
      } else if (reason === 'required') {
        detail = 'The frontmatter has a missing required property'
        context = `Add the missing property \`${property}\``
        // Missing properties report on their parent container when one exists.
        searchProperty = parts.length > 1 ? parts[parts.length - 2] : ''
      } else {
        detail = `Frontmatter ${message}.`
        context = property
        searchProperty = parts[0] || ''
      }

      // Missing top-level properties have no key to report, so they fall back to the file start.
      const query = (line: string) => line.trim().startsWith(`${searchProperty}:`)
      const line = searchProperty === '' ? null : params.lines.find(query)
      const lineNumber = line ? params.lines.indexOf(line) + 1 : 1
      addError(
        onError,
        lineNumber,
        detail,
        context,
        line ? [1, searchProperty.length] : null,
        null, // No fix possible
      )
    }
  },
}
