import matter from 'gray-matter'
import revalidator from 'revalidator'
import { difference, intersection } from 'lodash-es'

function readFrontmatter(markdown, opts = { validateKeyNames: false, validateKeyOrder: false }) {
  const schema = opts.schema || { properties: {} }
  const filepath = opts.filepath || null

  let content, data
  let errors = []

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
    errors.push(error)
    return { errors }
  }

  const allowedKeys = Object.keys(schema.properties)
  const existingKeys = Object.keys(data)
  const expectedKeys = intersection(allowedKeys, existingKeys)

  ;({ errors } = revalidator.validate(data, schema))

  // add filepath property to each error object
  if (errors.length && filepath) {
    errors = errors.map((error) => Object.assign(error, { filepath }))
  }

  // validate key names
  if (opts.validateKeyNames) {
    const invalidKeys = difference(existingKeys, allowedKeys)
    invalidKeys.forEach((key) => {
      const error = {
        property: key,
        message: `not allowed. Allowed properties are: ${allowedKeys.join(', ')}`,
      }
      if (filepath) error.filepath = filepath
      errors.push(error)
    })
  }

  // validate key order
  if (opts.validateKeyOrder && existingKeys.join('') !== expectedKeys.join('')) {
    const error = {
      property: 'keys',
      message: `keys must be in order. Current: ${existingKeys.join(
        ','
      )}; Expected: ${expectedKeys.join(',')}`,
    }
    if (filepath) error.filepath = filepath
    errors.push(error)
  }

  return { content, data, errors }
}

// Expose gray-matter's underlying stringify method for joining a parsed
// frontmatter object and a markdown string back into a unified string
//
// stringify('some string', {some: 'frontmatter'})
readFrontmatter.stringify = matter.stringify

export default readFrontmatter
