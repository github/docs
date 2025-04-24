import matter from 'gray-matter'

import { validateJson } from '#src/tests/lib/validate-json-schema.js'

function readFrontmatter(markdown, opts = {}) {
  const schema = opts.schema || { type: 'object', properties: {} }
  const filepath = opts.filepath || null

  let content, data

  try {
    ;({ content, data } = matter(markdown))
  } catch (e) {
    const defaultReason = 'invalid frontmatter entry'

    const reason = e.reason
      ? // make this common error message a little easier to understand
        e.reason.startsWith('can not read a block mapping entry;')
        ? defaultReason
        : e.reason
      : defaultReason

    const error = {
      reason,
      message: 'YML parsing error!',
    }

    if (filepath) error.filepath = filepath
    const errors = [error]
    console.warn(errors)

    return { errors }
  }

  const validate = validateJson(schema, data)

  // Combine the AJV-supplied `instancePath` and `params` into a more user-friendly frontmatter path.
  // For example, given:
  //   "instancePath": "/versions",
  //   "params": { "additionalProperty": "ftp" }
  // return:
  //   property: 'versions.ftp'
  //
  // The purpose is to help users understand that the error is on the `fpt` key within the `versions` object.
  // Note if the error is on a top-level FM property like `title`, the `instancePath` will be empty.
  const cleanPropertyPath = (params, instancePath) => {
    const mainProps = Object.values(params)[0]
    if (!instancePath) return mainProps

    const prefixProps = instancePath.replace('/', '').replace(/\//g, '.')
    return typeof mainProps !== 'object' ? `${prefixProps}.${mainProps}` : prefixProps
  }

  const errors = []

  if (!validate.isValid && filepath) {
    const formattedErrors = validate.errors.map((error) => {
      const userFriendly = {}
      userFriendly.property = cleanPropertyPath(error.params, error.instancePath)
      userFriendly.message = error.message
      userFriendly.reason = error.keyword
      userFriendly.filepath = filepath
      return userFriendly
    })
    errors.push(...formattedErrors)
  } else if (!validate.isValid) {
    errors.push(...validate.errors)
  }

  return { content, data, errors }
}

// Expose gray-matter's underlying stringify method for joining a parsed
// frontmatter object and a markdown string back into a unified string
//
// stringify('some string', {some: 'frontmatter'})
readFrontmatter.stringify = matter.stringify

export default readFrontmatter
