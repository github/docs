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

  // TODO: Temporary check for presence of deprecated GHAE feature flags in FM.
  // See details in docs-internal#29178.
  // We can remove this after semantic versioning has been in place for a while.
  // NOTE: This is here and not in the lib/frontmatter schema because the schema
  // does a more general error check; this is an additional regex check for a
  // specific error that contains a custom error message.
  const ghaeVersion = data?.versions?.ghae || data?.versions?.['github-ae']
  if (ghaeVersion && !filepath?.includes('/translations/')) {
    if (/issue-\d+?/.test(ghaeVersion)) {
      const error = {
        property: 'versions',
        message: `Lightweight feature flags ('${ghaeVersion}') are no longer supported in content. Use semantic versioning instead (ghae > 3.x or ghae: '> 3.x').`,
        filepath,
      }
      errors.push(error)
    }
  }

  return { content, data, errors }
}

// Expose gray-matter's underlying stringify method for joining a parsed
// frontmatter object and a markdown string back into a unified string
//
// stringify('some string', {some: 'frontmatter'})
readFrontmatter.stringify = matter.stringify

export default readFrontmatter
