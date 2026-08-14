import matter from '@gr2m/gray-matter'
import type { SchemaObject, ErrorObject } from 'ajv'

import { validateJson } from '@/tests/lib/validate-json-schema'

interface ReadFrontmatterOptions {
  schema?: SchemaObject
  filepath?: string | null
}

interface FrontmatterError {
  reason: string
  message?: string
  filepath?: string
  property?: string
}

function readFrontmatter(markdown: string, opts: ReadFrontmatterOptions = {}) {
  const schema: SchemaObject = opts.schema || { type: 'object', properties: {} }
  const filepath = opts.filepath || null

  let content
  let data

  try {
    ;({ content, data } = matter(markdown))
  } catch (e: unknown) {
    const defaultReason = 'invalid frontmatter entry'

    const reason =
      e instanceof Error && 'reason' in e
        ? // make this common error message a little easier to understand
          (e as { reason: string }).reason.startsWith('can not read a block mapping entry;') ||
          (e as { reason: string }).reason === 'bad indentation of a mapping entry'
          ? defaultReason
          : (e as { reason: string }).reason
        : defaultReason

    const error: FrontmatterError = {
      reason,
      message: 'YML parsing error!',
    }

    if (filepath) error.filepath = filepath
    const errors = [error]

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
  const cleanPropertyPath = (
    params: Record<string, unknown>,
    instancePath: string,
  ): string | undefined => {
    const mainProps = Object.values(params)[0]
    if (!instancePath) return mainProps as string | undefined

    const prefixProps = instancePath.replace('/', '').replace(/\//g, '.')
    return typeof mainProps === 'string' && /^[a-zA-Z_][\w-]*$/.test(mainProps)
      ? `${prefixProps}.${mainProps}`
      : prefixProps
  }

  const errors: FrontmatterError[] = []

  if (!validate.isValid && filepath) {
    const formattedErrors = (validate.errors as ErrorObject[]).map((error: ErrorObject) => {
      const userFriendly: FrontmatterError = {
        property: cleanPropertyPath(error.params, error.instancePath) || '',
        message: error.message,
        reason: error.keyword,
        filepath,
      }
      return userFriendly
    })
    errors.push(...formattedErrors)
  } else if (!validate.isValid) {
    const formattedErrors = (validate.errors as ErrorObject[]).map((error: ErrorObject) => ({
      property: cleanPropertyPath(error.params, error.instancePath) || '',
      message: error.message,
      reason: error.keyword,
    }))
    errors.push(...formattedErrors)
  }

  return { content, data, errors }
}

// Expose gray-matter's underlying stringify method for joining a parsed
// frontmatter object and a markdown string back into a unified string
//
// stringify('some string', {some: 'frontmatter'})
readFrontmatter.stringify = matter.stringify

export default readFrontmatter
