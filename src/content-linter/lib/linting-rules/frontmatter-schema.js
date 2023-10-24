import { addError } from 'markdownlint-rule-helpers'
import { intersection } from 'lodash-es'

import { getFrontmatter } from '../helpers/utils.js'
import { formatAjvErrors } from '../helpers/schema-utils.js'
import { frontmatter, deprecatedProperties } from '../../../../lib/frontmatter.js'
import readFrontmatter from '../../../../lib/read-frontmatter.js'

export const frontmatterSchema = {
  names: ['GHD012', 'frontmatter-schema'],
  description: 'Frontmatter must conform to the schema',
  tags: ['frontmatter', 'schema'],
  function: (params, onError) => {
    const fm = getFrontmatter(params.lines)
    if (!fm) return

    // Check that frontmatter does not contain any deprecated keys
    // Currently we only deprecate top-level properties and historcially
    // tests have only checked top-level properties. But, if more properties
    // are deprecated in the future, we'll need to do a deep check.
    const deprecatedKeys = intersection(Object.keys(fm), deprecatedProperties)
    for (const key of deprecatedKeys) {
      // Early access articles are allowed to have deprecated properties
      if (params.name.includes('early-access')) continue
      const line = params.lines.find((line) => line.trim().startsWith(key))
      const lineNumber = params.lines.indexOf(line) + 1
      addError(
        onError,
        lineNumber,
        `The frontmatter property '${key}' is deprecated. Please remove the property from your article's frontmatter.`,
        line,
        [1, line.length],
        null, // No fix possible
      )
    }

    // Check that the frontmatter matches the schema
    const { errors } = readFrontmatter(params.lines.join('\n'), { schema: frontmatter.schema })
    const formattedErrors = formatAjvErrors(errors)
    for (const error of formattedErrors) {
      // If the missing property is at the top level, we don't have a line
      // to point to. In that case, the error will be added to line 1.
      const query = (line) => line.trim().startsWith(`${error.searchProperty}:`)
      const line = error.searchProperty === '' ? null : params.lines.find(query)
      const lineNumber = line ? params.lines.indexOf(line) + 1 : 1
      addError(
        onError,
        lineNumber,
        error.detail,
        error.context,
        line ? [1, error.errorProperty.length] : null,
        null, // No fix possible
      )
    }
  },
}
