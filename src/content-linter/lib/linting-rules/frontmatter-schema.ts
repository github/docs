import { addError } from 'markdownlint-rule-helpers'
import { intersection } from 'lodash-es'

import { getFrontmatter } from '../helpers/utils'
import { frontmatter, deprecatedProperties } from '@/frame/lib/frontmatter'
import readFrontmatter from '@/frame/lib/read-frontmatter'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

export const frontmatterSchema: Rule = {
  names: ['GHD012', 'frontmatter-schema'],
  description: 'Frontmatter must conform to the schema',
  tags: ['frontmatter', 'schema'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    // Check that frontmatter does not contain any deprecated keys
    // Currently we only deprecate top-level properties and historically
    // tests have only checked top-level properties. But, if more properties
    // are deprecated in the future, we'll need to do a deep check.
    const deprecatedKeys = intersection(Object.keys(fm), deprecatedProperties)
    for (const key of deprecatedKeys) {
      // Early access articles are allowed to have deprecated properties
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

    // Check that the frontmatter matches the schema.
    // readFrontmatter returns errors as { property, message, reason } objects.
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
        // Search for the offending additional property directly
        searchProperty = parts[parts.length - 1] || ''
      } else if (reason === 'required') {
        detail = 'The frontmatter has a missing required property'
        context = `Add the missing property \`${property}\``
        // The property is missing, so point to its parent container
        searchProperty = parts.length > 1 ? parts[parts.length - 2] : ''
      } else {
        detail = `Frontmatter ${message}.`
        context = property
        searchProperty = parts[0] || ''
      }

      // If the property is at the top level or missing, we don't have a line
      // to point to. In that case, the error will be added to line 1.
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
